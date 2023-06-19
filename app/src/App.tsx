import NavHeader from "./components/NavHeader";
import Desafio from "./pages/Desafio";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function App() {
  return (
    <>
      <Flowbite>
        <div className="h-screen dark:bg-gray-900">
          <NavHeader />
          <div className="px-12 py-8 md:overflow-x-hidden">
            <Desafio />
          </div>
        </div>
      </Flowbite>
    </>
  );
}
