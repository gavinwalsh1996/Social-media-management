"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month View
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day Views
import interactionPlugin from "@fullcalendar/interaction"; // Drag-and-drop support
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const Calendar = () => {
  const scheduledPosts = useSelector(
    (state: RootState) => state.post.scheduledPosts
  );

  console.log("Scheduled Posts Redux State:", scheduledPosts);

  const events = scheduledPosts.map((post) => ({
    title: `${post.platform}: ${post.content}`,
    start: post.scheduledTime,
  }));
  console.log("Events for calendar:", events);

  const handleEventClick = (clickInfo: any) => {
    alert(`Scheduled Post: ${clickInfo.event.title}`);
  };

  const handleDateClick = (dateInfo: any) => {
    alert(`Date clicked: ${dateInfo.dateStr}`);
  };

  return (
    <div className="max-h-screen overflow-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        droppable={true}
      />
    </div>
  );
};

export default Calendar;
