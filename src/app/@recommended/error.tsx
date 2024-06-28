"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="layout-width">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-red-400 text-2xl mb-4">Something went wrong!</h2>
        <button className="border bg-red-500 text-white px-4 py-1 rounded-md" onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
