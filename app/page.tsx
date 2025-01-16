import { Spacer } from "@/components/global";
import { Banner, Calendar, Pricing, Explore, Gallery, Brands, Places } from "@/components/home"

export default function Home() {
  return (
    <main>
      <Banner />
      <Spacer tooSmall />
      <Calendar />
      <Spacer tooSmall />
      <Gallery />
      <Spacer tooSmall />
      <Explore />
      <Spacer tooSmall />
      <Pricing />
      <Spacer tooSmall />
      <Places />
      <Spacer tooSmall />
      <Brands />
    </main>
  );
}
