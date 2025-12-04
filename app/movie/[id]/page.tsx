"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, use } from "react";

export default function Wrapper({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page id={id} />
    </Suspense>
  );
}

function Page({ id }: { id: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      fetch(`http://www.omdbapi.com/?apikey=8018e581&i=${id}`).then((res) =>
        res.json()
      ),
  });

  return <div>My Movie id: {data?.Title}</div>;
}
