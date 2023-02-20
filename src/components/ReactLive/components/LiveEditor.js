import LiveContext from './LiveContext';
import React, { Fragment, useEffect, useState, useContext, useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import Highlight, { Prism } from 'prism-react-renderer';
import { theme as liveTheme } from '../constants/theme';

export default function LiveEditor(props) {
  const { code, language, theme, onChange, disabled } = useContext(LiveContext);
  const { style, ...rest } = props;

  const [state, setState] = useState({
    code: code || ''
  });

  useEffect(() => {
    if (state.prevCodeProp && code !== state.prevCodeProp) {
      setState({ code, prevCodeProp: code });
    }
  }, [code]);

  const updateContent = useCallback((code) => {
    setState({ code });
  }, [])

  const highlightCode = useCallback((_code) => (
    <Highlight
      Prism={Prism}
      code={_code}
      theme={theme || liveTheme}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  ), [theme, language]);

  const baseTheme = theme && typeof theme.plain === 'object' ? theme.plain : {};

  return (
    <Editor
      value={state.code}
      padding={10}
      highlight={highlightCode}
      onValueChange={updateContent}
      style={{
        whiteSpace: 'pre',
        fontFamily: 'monospace',
        ...baseTheme,
        ...style
      }}
      disabled={disabled}
      onChange={onChange}
      {...rest}
    />
  );
}