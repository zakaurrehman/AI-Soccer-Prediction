import React from "react";
import "../../assets/public/css/app.min.css";
import "../../assets/public/css/custom.css";

const DayHeader = ({ dayHeaderState, handleClickDay, selectedDate }) => {
  // Function to format date display (e.g., "Today", "Yesterday", "Tomorrow", or "Mon, 12 Nov")
  const formatDateDisplay = (dateStr) => {
    try {
      const [day, month, year] = dateStr.split("-");
      const date = new Date(year, month - 1, day);

     
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      // Compare the given date with today, yesterday, and tomorrow
      if (date.toDateString() === today.toDateString()) return "Today";
      if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
      if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";

      // Otherwise, return formatted date (e.g., "Mon, 12 Nov")
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
      const dayNumber = date.getDate();
      const monthName = date.toLocaleDateString("en-US", { month: "short" });

      return `${dayName}, ${dayNumber} ${monthName}`;
    } catch (error) {
      console.error("Date formatting error:", error);
      return dateStr;
    }
  };

  // Check if a date is today
  const isToday = (dateStr) => {
    const today = new Date();
    const [day, month, year] = dateStr.split("-");
    const date = new Date(year, month - 1, day);
    return date.toDateString() === today.toDateString();
  };

  return (
    <div>
      {/* Mobile Header */}
      <div className="header-space" style={{ maxHeight: "76px" }} />

      {/* Horizontal Scroll Menu */}
      <header
        id="secondary-nav"
        className="secondary-nav"
        style={{ position: "fixed" }}
      >
        <div className="container">
          <nav className="vam nav scroll dragger scroller text-center">
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              {dayHeaderState.map((day) => {
                const isSelected = selectedDate?.date === day.date;
                const isTodayDate = isToday(day.date);

                return (
                  <li
                  key={`day-${day.id}`}
                  className="nav-item"
                  style={{
                    margin: "0 4px",
                    position: "relative",
                  }}
                >
                  <a
                    href="#"
                    className={`nav-link date-button2 ${isSelected ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleClickDay(day);
                    }}
                    style={{
                      padding: "10px 15px",
                      borderRadius: "50px",
                      color: isSelected ? "#fff" : "#ccc",
                      backgroundColor: isSelected ? "#d00102" : "transparent",
                      transition: "all 0.3s ease",
                      border: isSelected
                        ? "1px solid #d00102"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      boxShadow: isSelected
                        ? "0 4px 6px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                        : "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                    }}
                    title={formatDateDisplay(day.date)} // Add tooltip
                  >
                    {formatDateDisplay(day.date)}
                
                    {/* Today indicator */}
                    {isTodayDate && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "#d00102",
                        }}
                      />
                    )}
                  </a>
                </li>
                
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default DayHeader;
