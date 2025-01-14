import Image from "next/image";
import { AppContainer } from "../global";
import { FC } from "react";
import { HeadingBox } from "./heading-box";
interface Gallery {
  title?: string;
  image?: string;
}
const gallery: Gallery[] = [
  { image: "/images/brand_img1.png" },
  { image: "/images/brand_img2.png" },
  { image: "/images/brand_img3.png" },
  { image: "/images/brand_img4.png" },
  { image: "/images/brand_img5.png" },
  { image: "/images/brand_img6.png" },
];
export const Gallery: FC = () => {
  return (
    <div>
      <AppContainer className="">
        <HeadingBox />
        <div className="grid justify-center items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
          {gallery &&
            gallery.length > 0 &&
            gallery.map((brand) => (
              <Image
                key={brand.image}
                src={brand.image ?? "/logo-light.png"}
                height={100}
                width={100}
                alt="Brand image"
                className="mx-auto"
              />
            ))}
        </div>
      </AppContainer>
    </div>
  );
};
