"use client";
import { useState, useTransition, useEffect } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (query.length > 6) {
      startTransition(async () => {
        await fetch(`http://www.omdbapi.com/?apikey=8018e581&s=${query}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      });
    } else {
      setData(null);
    }
  }, [query]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Movie search</h1>
      <div className="flex gap-2 max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Enter search query..."
          className="border border-gray-300 rounded px-4 py-2 flex-1"
        />
        {/* http://www.omdbapi.com/?i=tt3896198&apikey=8018e581 */}
        <button
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await fetch(`http://www.omdbapi.com/?apikey=8018e581&s=${query}`)
                .then((res) => res.json())
                .then((data) => setData(data));
            })
          }
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <p className="mt-4">Current query: {query}</p>
      {isPending && (
        <div className="mt-4">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}
      {data && data.Search && (
        <div className="mt-6 grid gap-4">
          {data.Search.map((item: any) => (
            <div
              //   key={1}
              key={item.imdbID}
              className="border border-gray-200 rounded p-4"
            >
              <h2 className="text-xl font-semibold">{item.Title}</h2>
              <p className="text-gray-600">{item.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
