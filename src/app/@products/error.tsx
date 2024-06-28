'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="layout-width">
      <h2>Something went wrong!</h2>
      <button className="border px-5 py-2" onClick={() => reset()}>Try again</button>
    </div>
  )
}