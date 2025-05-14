import "./EventCard.css";

const EventCard = ({ event, onContactClick }) => {
  const { title, date, location, image, description, type, past } = event;

  const getEventTypeIcon = () => {
    switch (type) {
      case "ride":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.18,10l-1.7-4.68A2.08,2.08,0,0,0,14.6,4H12v2h2.6l1.46,4H11.4l-.38-1.27L9.8,8.43,10.4,10H7.7L5.82,7.76A1,1,0,0,0,4.89,7.3l-2.5,1,.8,2,1.75-.7L6.4,12H5.8L3.29,15.77A1,1,0,0,0,4.11,17.2l2.5-1-.8-2-1,4h8.8l-.74-2H10.7l-1-3.48,2.66.13,1-.07L12.6,14H20V12H13.9l.28-1H18.18ZM6.8,14l.73-1h1.14l.69,2Zm7.5,3H9.5l.67-2h4.8Z" />
            <circle cx="19" cy="14" r="3" />
            <circle cx="5" cy="14" r="3" />
          </svg>
        );
      case "build":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.78 15.95L19.41 21.58L21.58 19.41L15.96 13.78M16.75 14.97L18.68 16.9L19.91 15.68L17.97 13.74M7.75 3V7H9.5V5.81C10.43 5.29 11.18 4.59 11.7 3.71C12.14 2.97 12.42 2 12.42 2L7.75 3M2 4.6V21H5V9.5C5 9.11 5.35 9 5.74 9H10.03C10.04 9 10.05 9 10.06 9C11.37 8.96 12.5 7.87 12.5 6.56C12.5 5.22 11.35 4.11 10 4.11C8.65 4.11 7.5 5.22 7.5 6.56V7H5.74C5.35 7 3.26 7.14 2 4.6M13.75 9V11H15V9H19V11H20.25V9H22V7H20.25V5H19V7H15V5H13.75V7H12V9H13.75Z" />
          </svg>
        );
      case "workshop":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.78 15.95L19.41 21.58L21.58 19.41L15.96 13.78M16.75 14.97L18.68 16.9L19.91 15.68L17.97 13.74M12 12V19L10 22L8 19V12H12M12 5C13.93 5 15.5 6.57 15.5 8.5C15.5 10.43 13.93 12 12 12C10.07 12 8.5 10.43 8.5 8.5C8.5 6.57 10.07 5 12 5Z" />
          </svg>
        );
      case "trip":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.5,19H21.5V21H2.5V19M22.07,9.64C21.86,8.84 21.03,8.36 20.23,8.58L14.92,10L8,7.67L3.8,9.35V15.14L8,13.33L15.5,15.8L20.23,14.14C21.03,13.93 21.51,13.09 21.29,12.29L22.07,9.64Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    if (past) {
      // For past events, you could show details
      console.log(`View details for ${title}`);
    } else {
      // For upcoming events, open the contact modal
      onContactClick();
    }
  };

  return (
    <div className={`event-card ${past ? "past" : "upcoming"}`}>
      <div className="event-image">
        <div className="event-date">
          <span>{date}</span>
        </div>
        <div className="event-type">{getEventTypeIcon()}</div>
        {!past && <div className="event-badge">upcoming</div>}
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <div className="event-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>
          <span>{location}</span>
        </div>
        <p>{description}</p>
        <button className="event-details-btn" onClick={handleButtonClick}>
          {past ? "view details" : "join event"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
