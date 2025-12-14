import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
