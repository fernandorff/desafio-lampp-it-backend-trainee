import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import logoUrl from "https://1000logos.net/wp-content/uploads/2021/04/ACME-logo.png";

export default function NavHeader() {
  return (
    <Navbar className="bg-slate-300">
      <Navbar.Brand>
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://1000logos.net/wp-content/uploads/2021/04/ACME-logo.png"
        />
      </Navbar.Brand>
      <DarkThemeToggle />
    </Navbar>
  );
}
