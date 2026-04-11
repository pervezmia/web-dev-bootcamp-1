"use client";
const ErrorHandle = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-300">Try Again</p>
        <h3 className="text-red-500">Something went wrong!</h3>
      </div>
    </div>
  );
};

export default ErrorHandle;
