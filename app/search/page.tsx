"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      const res = await fetch(`/api/movie?query=${query}`);
      if (!res.ok) throw new Error("Failed to fetch movies");
      return res.json();
    },
    enabled: query.length > 0,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Movie search</h1>
      <div className="flex gap-2 max-w-md">
        <Input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Enter search query..."
          className="border border-gray-300 rounded px-4 py-2 flex-1"
        />
      </div>
      <p className="mt-4">Current query: {query}</p>
      {isLoading && (
        <div className="mt-4">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}
      <div className="flex bg-black gap-4">
        <Button variant="destructive" className="text-left">
          Search
        </Button>
        <Button variant="destructive">Search</Button>
        <Button variant="destructive">Search</Button>
        <Button variant="destructive">Search</Button>
      </div>
      {data && data.Search && (
        <div className="mt-6 grid gap-4">
          {data.Search.map((item: any) => (
            <Link
              href={`/movie/${item.imdbID}`}
              key={item.imdbID}
              className="border border-gray-200 rounded p-4"
            >
              <h2 className="text-xl font-semibold">{item.Title}</h2>
              <p className="text-gray-600">{item.Year}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
