"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Day grid view
import interactionPlugin from "@fullcalendar/interaction"; // Drag-and-drop plugin

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
        plugins={[dayGridPlugin, interactionPlugin]} // Add plugins
        initialView="dayGridMonth"
        events={events} // Dynamic events array
        dateClick={handleDateClick} // Handle date click
        eventClick={handleEventClick} // Handle event click
        editable={true} // Enable drag-and-drop
        droppable={true} // Allow dragging events
      />
    </div>
  );
};

export default Calendar;
