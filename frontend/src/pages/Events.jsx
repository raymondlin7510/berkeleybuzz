import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/BerkeleyBuzzLogo.png';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <img src={logo} alt="Berkeley Buzz Logo" className="h-12" />
        <Link
          to="/add-event"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Event
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {event.imageUrl && (
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-gray-500">
                {new Date(event.date).toLocaleDateString()} at{' '}
                {new Date(event.date).toLocaleTimeString()}
              </p>
              <p className="text-gray-500">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events; 