import React, { useCallback, useContext, useEffect, useRef } from 'react';
import LiveContext from './LiveContext';
import ErrorBoundary from './ErrorBoundary'
import evalCode from '../utils/evalCode'
import transform from '../utils/transform'

function LivePreview({ ...rest }) {
  const { code, scope, error, onError } = useContext(LiveContext);
  const domRef = useRef()

  const run = useCallback((newCode) => {
    try {
      const codeTrimmed = newCode.trim().replace(/;$/, '');
      const transformed = transform(`${codeTrimmed}`).trim();
      evalCode(transformed, scope, domRef.current)
      onError('')
    } catch (error) {
      onError(error)
    }
  }, [])

  useEffect(() => {
    code && run(code)
  }, [code])

  return (
    <ErrorBoundary error={error} onError={onError}>
      <div {...rest} ref={domRef}></div>
    </ErrorBoundary>
  );
}

export default LivePreview;
