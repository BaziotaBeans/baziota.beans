import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Header />
      <Projects />
    </main>
  );
}
