// CalendarPage.tsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const events = [
    {
      title: 'Professor Rao OH',
      start: '2024-12-02T09:30:00',
      end: '2024-12-02T11:00:00',
      backgroundColor: '#20c997',
      textColor: 'white',
    },
    {
      title: 'CS70 Office Hours',
      start: '2024-12-03T11:00:00',
      end: '2024-12-03T13:00:00',
      backgroundColor: '#007bff',
      textColor: 'white',
    }
  ];

  const handleEventClick = (info: any) => {
    //navigate(`/event/${info.event.id}`);
    console.log('event clicked');
  };

  return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          right: 'prev,next today',
        }}
        events={events}
        eventClick={handleEventClick}
      />
  );
};

export default Calendar;
