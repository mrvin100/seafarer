import { cn } from "@/lib/utils";
import { FC } from "react";
interface HeadingBoxProps {
  title?: string;
  subTitle?: string;
  description?: string
  className?: string
}
export const HeadingBox: FC<HeadingBoxProps> = ({ title, subTitle, description, className }) => {
  return (
    <div className={cn("text-center space-y-3 my-8", className)}>
      <h4 className="text-sm text-primary font-light uppercase">{subTitle ?? "EXOTIC DESTINATIONS"}</h4>
      <h2 className="text-4xl uppercase -tracking-tighter leading-6 --font-cormorant text-card-foreground font-light">{title ?? "New places"}</h2>
      <p className="my-2 max-w-xl mx-auto">
        {description ?? "Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhoncus aecenas tempus,"}
      </p>
    </div>
  );
};
