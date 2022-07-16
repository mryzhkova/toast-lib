import React from 'react';

interface Props {
  children: JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render(): React.ReactElement {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <h1>Something went wrong</h1> : children;
  }
}

export default ErrorBoundary;
