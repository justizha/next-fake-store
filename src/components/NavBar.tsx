import { ThemeButton } from "./ThemeButton";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="z-10 px-8 py-2 shadow">
      <div className="flex items-center justify-between">
        <ul className="flex gap-4 dark:text-white">
          <li>
            <Link href={"/products"} className="duration-150 hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href={"/category"} className="duration-150 hover:underline">
              Category
            </Link>
          </li>
        </ul>
        <ThemeButton />
      </div>
    </nav>
  );
}
