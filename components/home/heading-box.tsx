import { cn } from "@/lib/utils";
import { FC } from "react";
interface HeadingBoxProps {
  title?: string;
  subTitle?: string;
  description?: string
  className?: string
  withSubTitle?:boolean
  withDescription?:boolean
  subTitleStyle?:string
  titleStyle?:string
}
export const HeadingBox: FC<HeadingBoxProps> = ({ title, subTitle, description, className, withDescription = true, withSubTitle = true, subTitleStyle, titleStyle }) => {
  return (
    <div className={cn("text-center space-y-3 my-8", className)}>
      {withSubTitle &&<h4 className={cn("text-xs text-primary font-light uppercase tracking-[.2rem] w-full", subTitleStyle)}>{subTitle ?? "EXOTIC DESTINATIONS"}</h4>}
      <h2 className={cn("font-[family-name:var(--font-cormorant)] text-4xl uppercase tracking-[.3rem] --font-cormorant text-card-foreground font-light", titleStyle)}>{title ?? "New places"}</h2>
      {withDescription && <p className="my-2 max-w-xl mx-auto">
        {description ?? "Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhoncus aecenas tempus,"}
      </p>}
    </div>
  );
};
