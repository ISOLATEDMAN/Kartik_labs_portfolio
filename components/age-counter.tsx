"use client";

import { useEffect, useState } from "react";

export function AgeCounter() {
  const [age, setAge] = useState<string>("20");

  useEffect(() => {
    // Birth date: Feb 18, 2005, 11:52 PM IST (Indian Standard Time)
    // 11:52 PM IST = 18:22 UTC
    const birthDate = new Date("2005-02-18T18:22:00Z");
    
    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      
      // Calculate years with high precision (accounting for leap years approx)
      const years = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(years.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, []);

  return <span className="font-medium tabular-nums">{age}</span>;
}
