import React, { useState } from 'react';

import LiveContext from './LiveContext';

function LiveProvider({
  children,
  code = '',
  language = 'jsx',
  theme,
  scope,
  disabled = false,
  onChange = (newCode) => {},
}) {
  const [state, setState] = useState({
    error: undefined,
    element: undefined
  });

  const onError = error => setState({ error: error.toString() });

  return (
    <LiveContext.Provider
      value={{
        ...state,
        code,
        scope,
        language,
        theme,
        onError,
        disabled,
        onChange,
      }}
    >
      {children}
    </LiveContext.Provider>
  );
}

export default LiveProvider;
