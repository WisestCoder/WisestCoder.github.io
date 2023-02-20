import React, { Component } from 'react';
import LiveError from './LiveError'

export default class ErrorBoundary extends Component {
  componentDidCatch(error) {
    const { onError } = this.props
    debugger

    onError(error)
  }

  render() {
    const { error, children } = this.props

    return (
      <>
        {error && <LiveError error={error} />}
        <div style={{ height: error ? '0' : 'auto', overflow: 'hidden' }}>{children}</div>
      </>
    )
  }
};