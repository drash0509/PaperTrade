import Image from "next/image";
import Navbar from "./components/NavBar/Navbar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
      <main>
        {children}
      </main>
  );
}
