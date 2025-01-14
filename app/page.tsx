import { Spacer } from "@/components/global";
import { Banner } from "@/components/home/banner";
import { Brands } from "@/components/home/brand";
import { Explore } from "@/components/home/explore";
import { Gallery } from "@/components/home/gallery";
import { Pricing } from "@/components/home/pricing";

export default function Home() {
  return (
    <main>
      <Banner />
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
