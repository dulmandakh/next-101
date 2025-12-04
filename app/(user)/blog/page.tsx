import Link from "next/link";
export default function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blog/react-101">React 101</Link>
        </li>
        <li>
          <Link href="/blog/next-101">Next 101</Link>
        </li>
      </ul>
    </div>
  );
}
