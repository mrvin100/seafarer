import Image from "next/image";
import { AppContainer, Spacer } from "../global";
import { FC } from "react";
import { HeadingBox } from "./heading-box";
interface Gallery {
  title?: string;
  subTitle?: string;
  image?: string;
}
const list: Gallery[] = [
  { image: "/images/list-img-2.jpg", title: "cometo yacht", subTitle: "123 $ / per day" },
  { image: "/images/list-img-3.jpg", title: "videto yacht", subTitle: "123 $ / per day" },
];
export const Places: FC = () => {
  return (
    <div>
      <AppContainer className="">
        <HeadingBox />
        <Spacer small />
        <div className="grid justify-center sm:grid-cols-2 gap-4 md:gap-8 ">
          {list &&
            list.length > 0 &&
            list.map((box) => (
              <div key={box.title} className="p-2 border-muted-foreground border">
                <Image
                  src={box.image ?? "/logo-light.png"}
                  height={800}
                  width={800}
                  alt="Brand image"
                  className="mx-auto h-80 w-full object-cover"
                />
                <HeadingBox withDescription={false} subTitle={box.subTitle} title={box.title} subTitleStyle="normal-case" titleStyle="text-xl" />
              </div>
            ))}
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
