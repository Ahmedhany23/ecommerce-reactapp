import React, { useState, useEffect } from "react";

export default function CountdownTimer({ deadline , type = 1 }) {
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

  if(type === 2){
    return(
      <div className=" flex gap-2 sm:gap-6 ">
      <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1 ">
        <span className="font-semibold">{days}</span>
        <span className="text-[11px]">Days</span>
      </div>
      <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
        <span className="font-semibold">{hours}</span>
        <span className="text-[11px]">Hours</span>
      </div>
      
       <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
        <span className="font-semibold">{minutes}</span>
        <span className="text-[11px]">Minutes</span>
      </div>
      
       <div className="flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-background-1">
        <span className="font-semibold">{seconds}</span>
        <span className="text-[11px]">Seconds</span>
      </div>
    </div>
    )
  }


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
