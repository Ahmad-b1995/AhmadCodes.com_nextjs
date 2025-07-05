"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

// Functional component for the error UI
const ErrorFallback = ({ error, errorInfo, onReset }: { 
  error?: Error; 
  errorInfo?: ErrorInfo; 
  onReset: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We encountered an unexpected error. Please try refreshing the page or email me at{" "}
            <a 
              href="mailto:ahmad@ahmadcodes.com" 
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              ahmad@ahmadcodes.com
            </a>{" "}
            if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onReset}
            className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = "/"}
            className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            Go Home
          </button>
        </div>

        {process.env.NODE_ENV === "development" && error && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">
              Error Details (Development)
            </summary>
            <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-400 overflow-auto max-h-48">
              <div className="mb-2">
                <strong>Error:</strong> {error.message}
              </div>
              <div className="mb-2">
                <strong>Stack:</strong>
                <pre className="mt-1 whitespace-pre-wrap">{error.stack}</pre>
              </div>
              {errorInfo && (
                <div>
                  <strong>Component Stack:</strong>
                  <pre className="mt-1 whitespace-pre-wrap">{errorInfo.componentStack}</pre>
                </div>
              )}
            </div>
          </details>
        )}
      </div>
    </div>
  );
};

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
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback 
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 