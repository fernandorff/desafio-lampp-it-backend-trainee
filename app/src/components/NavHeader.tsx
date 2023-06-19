import { DarkThemeToggle, Navbar } from "flowbite-react";

export default function NavHeader() {
  return (
    <Navbar className="shadow">
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
