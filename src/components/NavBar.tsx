import { ThemeButton } from "./ThemeButton";
export default function NavBar() {
  return (
    <nav className="px-4 py-3">
      <div className="flex justify-between">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ThemeButton />
      </div>
    </nav>
  );
}
