import { Metadata } from "next";
import { MovieClient } from "./MovieClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=8b8328a7&i=${id}`);
    const data = await res.json();

    if (data.Error) {
      return {
        title: "Movie Not Found",
        description: "The requested movie could not be found.",
      };
    }

    return {
      title: data.Title || "Movie Details",
      description: data.Plot || `Details for ${data.Title || "the movie"}`,
      openGraph: {
        title: data.Title || "Movie Details",
        description: data.Plot || `Details for ${data.Title || "the movie"}`,
        type: "website",
        images: data.Poster && data.Poster !== "N/A" ? [data.Poster] : [],
      },
    };
  } catch {
    return {
      title: "Movie Details",
      description: "Loading movie information...",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <MovieClient id={id} />;
}
