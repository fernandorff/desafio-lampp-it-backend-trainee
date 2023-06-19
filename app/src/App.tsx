import { Flowbite } from "flowbite-react";
import NavHeader from "./components/NavHeader";
import Desafio from "./pages/Desafio";

export default function App() {
  return (
    <>
      <Flowbite>
        <div className="flex h-screen flex-col dark:bg-gray-900">
          <NavHeader />
          <div className="px-12 py-8 md:overflow-x-hidden">
            <Desafio />
          </div>
        </div>
      </Flowbite>
    </>
  );
}
