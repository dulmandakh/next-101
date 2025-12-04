import Link from "next/link";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">About Our Company</h1>
        <p className="text-gray-700">
          We are a leading organization dedicated to innovation and excellence
          in our industry.
        </p>
      </div>
      <ul className="flex gap-4 bg-gray-400">
        <li>
          <Link href="/about">Structure</Link>
        </li>
        <li>
          <Link href="/about/board">Board</Link>
        </li>
        <li>
          <Link href="/about/management">Management</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
