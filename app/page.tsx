import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Leadership } from "@/components/main/leadership";
import { Experience } from "@/components/main/experience";
import { Education } from "@/components/main/education";
import { Awards } from "@/components/main/awards";
import { Certifications } from "@/components/main/certifications";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Leadership />
        <Awards />
        <Certifications />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
