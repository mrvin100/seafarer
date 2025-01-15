import { AppContainer } from "../global";
import { FC } from "react";
import { CalendarForm } from "./claendar-form";

export const Calendar: FC = () => {
  return (
    <div>
      <AppContainer className="">
        <CalendarForm />
      </AppContainer>
    </div>
  );
};
