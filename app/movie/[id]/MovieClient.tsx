"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Suspense } from "react";

export function MovieClient({ id }: { id: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page id={id} />
    </Suspense>
  );
}

function Page({ id }: { id: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ["movie", id],
    queryFn: () => fetch(`/api/movie/${id}`).then((res) => res.json()),
  });

  console.log(data);

  return (
    <div>
      <Image src={data?.Poster} alt={data?.Title} width={100} height={100} />
      My Movie id: {data?.Title}
    </div>
  );
}
