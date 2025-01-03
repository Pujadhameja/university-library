"use client";

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-md">
      <h2 className="text-lg font-semibold mb-2">
        Oops! Something went wrong.
      </h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorFallback;
