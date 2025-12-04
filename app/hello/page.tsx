"use client";
import { useState } from "react";

export default function HelloPage() {
  const [name, setName] = useState("World");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Hello Page</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {name && <p className="text-xl text-center">Hello, {name}!</p>}
      </div>
    </div>
  );
}
