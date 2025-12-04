"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test Page</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {!!count && <p>Count: {count}</p>}
    </div>
  );
}
