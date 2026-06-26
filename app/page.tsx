import { Hero } from "@/components/sections/hero";
import { Inquiry } from "@/components/sections/inquiry";
import { OwnOrRent } from "@/components/sections/own-or-rent";
import { TheHomes } from "@/components/sections/the-homes";
import { TheShore } from "@/components/sections/the-shore";
import { Welcome } from "@/components/sections/welcome";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <TheHomes />
      <TheShore />
      <OwnOrRent />
      <Inquiry />
    </main>
  );
}
