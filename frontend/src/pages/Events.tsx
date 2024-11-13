import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/homePage/Navbar';
import Footer from '../components/homePage/Footer';

// Sample initial event data for HealthHer platform
const initialEventData = [
  {
    event_id: '1',
    event_name: 'Mental Health Awareness Webinar',
    event_description: 'Join us for a webinar focusing on mental health, self-care, and well-being, with expert speakers from various fields.',
    event_image: 'https://i.pinimg.com/474x/b8/31/e1/b831e1eecb32c74822f1d6929ea2d15f.jpg',  // Replace with an actual image link
    event_link: '/events/mental-health-awareness-webinar',
  },
  {
    event_id: '2',
    event_name: 'Fitness for Women: Empower Your Health',
    event_description: 'A fitness workshop designed for women to improve strength, flexibility, and overall wellness. Join the movement!',
    event_image: 'https://i.pinimg.com/474x/08/6b/58/086b587d6ce25cb9b6daa5d35f1de381.jpg',  // Replace with an actual image link
    event_link: '/events/fitness-for-women',
  },
  {
    event_id: '3',
    event_name: 'Healthy Eating Habits for a Better Life',
    event_description: 'Learn about the benefits of healthy eating and nutrition with a dietitian, including practical tips and meal planning.',
    event_image: 'https://i.pinimg.com/474x/25/b6/c5/25b6c54cc9e55198b9803cb874f00915.jpg',  // Replace with an actual image link
    event_link: '/events/healthy-eating-habits',
  },
];

// Component to display the events for HealthHer platform
const Events: React.FC = () => {
  const [events] = useState(initialEventData);
  // const [newEvent, setNewEvent] = useState({
  //   event_name: '',
  //   event_description: '',
  //   event_image: '',
  //   event_link: '',
  // });
  // const navigate = useNavigate();

  // Redirect to the "Create Event" page
  // const handleCreateEvent = () => {
  //   navigate('/create-event');
  // };

  // Handler for form input changes
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setNewEvent({ ...newEvent, [name]: value });
  // };

  // Handler for form submission
  // const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Generate a new ID for the event
  //   const newEventId = (events.length + 1).toString();

  //   // Add the new event to the list of events
  //   const updatedEvents = [
  //     ...events,
  //     {
  //       ...newEvent,
  //       event_id: newEventId,
  //     },
  //   ];

  //   setEvents(updatedEvents);

  //   // Clear the form after submission
  //   setNewEvent({
  //     event_name: '',
  //     event_description: '',
  //     event_image: '',
  //     event_link: '',
  //   });
  // };

  // Handler for deleting an event
  // const handleDeleteEvent = (eventId: string) => {
  //   setEvents(events.filter(event => event.event_id !== eventId));
  // };

  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto py-6 px-4 lg:px-0">
        <h1 className="text-3xl font-bold flex justify-center text-white mb-6 px-4">HealthHer Upcoming Events</h1>
        {/* <button
          onClick={handleCreateEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Event
        </button> */}

        {events.length === 0 ? (
          <p className="text-lg text-gray-200">No events available at the moment. Check back later!</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-4">
            {events.map((event) => (
              <li key={event.event_id} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full">
                {event.event_image && (
                  <img
                    src={event.event_image}
                    alt="Event banner"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {event.event_name}
                </h2>
                <p className="text-white mb-2"><strong>About: </strong>{event.event_description}</p>
                <div className="card-container flex justify-center items-center">
                  <p className="mb-2 flex justify-center">
                    <a href={event.event_link} className="bg-drawer px-4 p-2 text-black w-[80px] rounded hover:bg-blue-500">
                      <button
                        className="bg-green-500 p-2 text-white w-[100px] rounded hover:text-blue-700 font-medium"
                      >Read More</button>
                    </a>
                  </p>
                </div>
                {/* <div className="flex justify-between mt-6 space-x-4">
                  <button
                    className="bg-blue-500 p-2 text-white w-[100px] rounded hover:text-blue-700 font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.event_id)}
                    className="bg-red-500 p-2 text-white w-[100px] rounded hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </div> */}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
