import React, { useState, useEffect } from "react";

export default function CountdownTimer({ deadline }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className="countdown-number">{days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{seconds}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
}
