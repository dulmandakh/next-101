"use client";

import { useState } from "react";

// http://www.omdbapi.com/?i=tt3896198&apikey=8018e581
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

function Input({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-2 py-1"
    />
  );
}

function DisplayMovie({ name, year }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Movie Details:</h2>
      <p>Name: {name}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default function MoviePage() {
  const [movie, setMovie] = useState("Spider-Man");
  const [year, setYear] = useState(2002);

  return (
    <div className="border border-gray-300 rounded p-4">
      <Input
        type="text"
        value={movie}
        onChange={setMovie}
        placeholder="Enter movie name"
      />
      <Input
        type="number"
        value={year}
        onChange={setYear}
        placeholder="Enter year"
      />
      <DisplayMovie name={movie} year={year} />
    </div>
  );
}
