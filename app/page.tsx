import { Spacer } from "@/components/global";
import { Brands } from "@/components/home/brand";
import { Gallery } from "@/components/home/gallery";

export default function Home() {
  return (
    <main>
      <Spacer tooSmall />
      <Gallery />
      <Spacer tooSmall />
      <Brands />
    </main>
  );
}
