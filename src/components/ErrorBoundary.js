import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.error('Error captured by ErrorBoundary: ', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error: {this.state.errorMessage}</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
