import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto border">
      <Navbar/>
      <div className="min-h-screen">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
        />
      </div>
      <Footer/>

    </div>
  );
}
