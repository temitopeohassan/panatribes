import Hero from "@/components/sections/Hero";
import Category from "@/components/sections/Category";
import Why from "@/components/sections/Why";
import StatsTestimonials from "@/components/sections/StatsTestimonials";
import Trending from "@/components/sections/Trending";
import PowerPromo from "@/components/sections/PowerPromo";
import Newsletter from "@/components/sections/Newsletter";

export default function Page() {
  return (
    <>
      <Hero />
      <Category />
      <Trending />
      <Why />
      <PowerPromo />
      <StatsTestimonials />
      <Newsletter />
    </>
  );
}
