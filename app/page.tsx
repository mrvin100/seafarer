import { Spacer } from "@/components/global";
import { Banner, Calendar, Pricing, Explore, Gallery, Brands } from "@/components/home"

export default function Home() {
  return (
    <main>
      <Banner />
      <Spacer tooSmall />
      <Calendar />
      <Spacer tooSmall />
      <Pricing />
      <Spacer tooSmall />
      <Explore />
      <Spacer tooSmall />
      <Gallery />
      <Spacer tooSmall />
      <Brands />
    </main>
  );
}
