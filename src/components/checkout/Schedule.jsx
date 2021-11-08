import React from "react";
import { ContentCard } from "./cards/ContentCard";
import { CheckoutCard } from "./cards/CheckoutCard";

const schedules = [
  { id: 1, title: "Express-Delivery", text: "90 min express delivery" },
  { id: 2, title: "8am-11am", text: "8:00 AM - 11:00 AM" },
  { id: 3, title: "11am-2pm", text: "11:00 AM - 2:00 PM" },
  { id: 4, title: "2pm-5pm", text: "2:00 PM - 5:00 PM" },
];

export const Schedule = ({ activeSchedule, setActiveSchedule }) => {
  const isActiveSchedule = (id) => activeSchedule && activeSchedule.id === id;
  const handleOnScheduleClick = (schedule) => () => setActiveSchedule(schedule);

  return (
    <CheckoutCard id={2} header="Delivery Schedule">
      {schedules &&
        schedules.map((schedule) => (
          <ContentCard
            title={schedule.title}
            text={schedule.text}
            active={isActiveSchedule(schedule.id)}
            onClick={handleOnScheduleClick(schedule)}
            key={`schedule-${schedule.id}`}
          />
        ))}
    </CheckoutCard>
  );
};
