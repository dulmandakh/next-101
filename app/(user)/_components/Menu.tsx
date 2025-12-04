"use client";
import Link from "next/link";

export function Menu() {
  return (
    <div>
      <ul className="flex gap-4 bg-gray-200">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export const name = "Menu Component";
