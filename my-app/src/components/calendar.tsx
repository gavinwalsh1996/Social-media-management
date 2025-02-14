"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month View
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day Views
import interactionPlugin from "@fullcalendar/interaction"; // Drag-and-drop support

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", date: "2025-02-20" },
    { title: "Task", date: "2025-02-22" },
  ]);

  const handleEventClick = (clickInfo: any) => {
    alert(`Event: ${clickInfo.event.title}`);
  };

  const handleDateClick = (dateInfo: any) => {
    alert(`Date clicked: ${dateInfo.dateStr}`);
  };

  return (
    <div className="calendar-container">
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
