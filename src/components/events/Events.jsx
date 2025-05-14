import { useState } from "react";
import "./Events.css";
import EventCard from "./EventCard";

const Events = ({ onContactClick }) => {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Weekend Shred Session",
      date: "June 15, 2023",
      location: "Vodno Trails",
      image: "/events/event1.jpg",
      description:
        "Join us for a day of downhill madness on the Vodno trails. All skill levels welcome.",
      type: "ride",
      past: true,
    },
    {
      id: 2,
      title: "Trail Building Day",
      date: "July 22, 2023",
      location: "Secret Spot",
      image: "/events/event2.jpg",
      description:
        "Help us build new features on our secret trail. Bring gloves and a shovel if you have one.",
      type: "build",
      past: true,
    },
    {
      id: 3,
      title: "Bike Maintenance Workshop",
      date: "August 5, 2023",
      location: "Tetka Bile",
      image: "/events/event3.jpg",
      description:
        "Learn how to keep your bike running smooth with our mechanic Pero. Beer included.",
      type: "workshop",
      past: true,
    },
    {
      id: 4,
      title: "Night Ride",
      date: "September 10, 2023",
      location: "City Forest",
      image: "/events/event4.jpg",
      description:
        "Lights on, brakes off. Experience the trails in a whole new way.",
      type: "ride",
      past: true,
    },
    {
      id: 5,
      title: "Season Opener",
      date: "April 20, 2024",
      location: "Vodno Trails",
      image: "/events/event5.jpg",
      description:
        "Kick off the new season with a group ride followed by beers at the local spot.",
      type: "ride",
      past: false,
    },
    {
      id: 6,
      title: "Bike Park Trip",
      date: "May 15, 2024",
      location: "Mavrovo Bike Park",
      image: "/events/event6.jpg",
      description:
        "Weekend trip to Mavrovo Bike Park. Transportation and accommodation details to follow.",
      type: "trip",
      past: false,
    },
  ];

  const filteredEvents =
    filter === "all"
      ? events
      : filter === "upcoming"
      ? events.filter((event) => !event.past)
      : events.filter((event) => event.past);

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-header fade-in">
          <h2>
            our <span>events</span>
          </h2>
          <div className="accent-line"></div>
        </div>

        <div className="events-filter fade-in">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            all events
          </button>
          <button
            className={`filter-btn ${filter === "upcoming" ? "active" : ""}`}
            onClick={() => setFilter("upcoming")}
          >
            upcoming
          </button>
          <button
            className={`filter-btn ${filter === "past" ? "active" : ""}`}
            onClick={() => setFilter("past")}
          >
            past events
          </button>
        </div>

        <div className="events-grid fade-in">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onContactClick={onContactClick}
              />
            ))
          ) : (
            <div className="no-events">
              <p>No {filter} events to display</p>
            </div>
          )}
        </div>

        <div className="events-cta fade-in">
          <div className="cta-content">
            <h3>want to join us?</h3>
            <p>
              Have an idea for an event or want to ride with us? Drop us a
              message!
            </p>
          </div>
          <button className="cta-button" onClick={onContactClick}>
            get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
