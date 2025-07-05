"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { ErrorUI } from "@/app/error";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

// Class component wrapper (required for error boundaries)
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReset = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorUI
          error={this.state.error}
          title="Oops! Something went wrong"
          onTryAgain={this.handleReset}
          showDigest={false}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 