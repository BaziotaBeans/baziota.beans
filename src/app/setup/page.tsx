import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Header />

      <Footer />
    </main>
  );
}
