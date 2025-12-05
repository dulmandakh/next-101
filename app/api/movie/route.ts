import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  console.log("query", query);
  const res = await fetch(`http://www.omdbapi.com/?apikey=8b8328a7&s=${query}`);
  const data = await res.json();
  return NextResponse.json(data) as NextResponse;
}
