import React, { useState } from "react";
import { Addresses } from "./Addresses";
import { Schedule } from "./Schedule";

export const Checkout = () => {
  const [activeAddress, setActiveAddress] = useState(null);
  const [activeSchedule, setActiveSchedule] = useState(null);

  return (
    <div className="checkout_container">
      <div className="checkout_credentials">
        <Addresses
          activeAddress={activeAddress}
          setActiveAddress={setActiveAddress}
        />
        <Schedule
          activeSchedule={activeSchedule}
          setActiveSchedule={setActiveSchedule}
        />
      </div>
    </div>
  );
};
