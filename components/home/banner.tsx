import { AppContainer } from "../global";
import { FC } from "react";
import { HeadingBox } from "./heading-box";

export const Banner: FC = () => {
  return (
    <div>
      <AppContainer className="max-w-full p-0 w-full relative h-[70vh]">
        <video
          className="w-full h-full object-cover"
          loop
          muted={true}
          autoPlay
        >
          <source src={"/video-boat.mp4"} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="absolute bottom-[10%] left-[10%] w-full px-4 sm:w-auto bg-muted/30">
          <HeadingBox
            subTitle="explore the ocean"
            title="rent a yacht"
            className="text-left"
            titleStyle="font-extralight md:text-6xl"
            subTitleStyle="text-card-foreground"
            withDescription={false}
          />
        </div>
      </AppContainer>
    </div>
  );
};