import { CatalogGrid } from "@/components/sections/CatalogGrid";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { templates } from "@/data/templates";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <CatalogGrid templates={templates} />
      <Testimonials />
      <FAQ />
    </div>
  );
}
