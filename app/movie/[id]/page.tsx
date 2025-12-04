"use client";
import { use, useEffect, useState, useTransition } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [movie, setMovie] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      await fetch(`http://www.omdbapi.com/?apikey=8018e581&i=${id}`)
        .then((res) => res.json())
        .then((data) => setMovie(data));
    });
  }, []);

  console.log(movie);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <>
      <div>My Movie id: {movie?.Title}</div>
    </>
  );
}
