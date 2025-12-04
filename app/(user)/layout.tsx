import { Menu } from "./_components/Menu";

export default function MenuLayout({ children }) {
  return (
    <div>
      <Menu />
      <div>{children}</div>
    </div>
  );
}
