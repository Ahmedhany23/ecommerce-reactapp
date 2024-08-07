import React, { useState, useEffect } from "react";

// Utility function to format numbers with leading zeros
const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number.toString();
};

export default function CountdownTimer({ deadline, type = 1 }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);



  useEffect(() => {
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  // Type 2 display
  if (type === 2) {
    return (
      <div className="flex gap-2 sm:gap-6">
        <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
          <span className="font-semibold">{formatNumber(days)}</span>
          <span className="text-[11px]">Days</span>
        </div>
        <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
          <span className="font-semibold">{formatNumber(hours)}</span>
          <span className="text-[11px]">Hours</span>
        </div>

        <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
          <span className="font-semibold">{formatNumber(minutes)}</span>
          <span className="text-[11px]">Minutes</span>
        </div>

        <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
          <span className="font-semibold">{formatNumber(seconds)}</span>
          <span className="text-[11px]">Seconds</span>
        </div>
      </div>
    );
  }

  // Default display
  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(days)}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(hours)}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(minutes)}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <span className="countdown-number">{formatNumber(seconds)}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
}
