const Example = () => {
  return (
    <div>
      <div>
        <div
          style={{
            overflow: "visible",
            minHeight: "auto",
            minWidth: "auto",
            width: "100%",
            height: "900px",
            zIndex: 0,
            position: "absolute",
            display: "block",
            visibility: "visible",
            left: 0,
            top: 0,
          }}
        >
          <div
            className="sr7-layer"
            style={{
              padding: "0px",
              width: "100%",
              height: "900px",
              display: "block",
              visibility: "visible",
              overflow: "hidden",
              pointerEvents: "none",
              opacity: 1,
            }}
          >
            <canvas
              width="2585"
              height="1454"
              style={{
                width: "2560px",
                height: "1440px",
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible",
                background: "transparent",
                opacity: 1,
              }}
            ></canvas>
            <div
              className="sr7-media"
              style={{
                width: "100%",
                height: "100%",
                visibility: "visible",
                pointerEvents: "none",
                opacity: 1,
              }}
            >
              <video
                id="SR7_3_1-7-2_video_html5"
                className="sr7-html5-video"
                src="https://luxestay.wpthemeverse.com/wp-content/uploads/2024/08/hotel2-2.mp4"
                preload="metadata"
                playsInline
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></video>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABNJREFUGFdjZGBgSGRgYGBghDEAB2AAxaq4dD4AAAAASUVORK5CYII=)",
              }}
            ></div>
          </div>
        </div>
      </div>

{/* card  */}

<div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />

      {/* Event Content */}
      <div className="p-6">
        {/* Event Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {event.title}
        </h3>

        {/* Event Date & Category */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>
            📅 {event.date} | 🕒 {event.time}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            {event.category}
          </span>
        </div>

        {/* Event Location */}
        <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
          📍 <span>{event.venue}</span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-6">{event.description}</p>

        {/* Ticket Price and Button */}
        <div className="flex justify-between items-center">
          <div className="font-semibold text-blue-600 text-lg">
            {event.ticketPrice === "Free"
              ? "Free"
              : `$${event.ticketPrice}`}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Example;
