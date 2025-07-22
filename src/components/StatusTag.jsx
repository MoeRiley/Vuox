import React, { useEffect, useState } from "react";
import get_system_newest_status from "../api/get_system_newest_status";

const StatusTag = () => {
  const [status, setStatus] = useState("Loading...");
  const [statusColor, setStatusColor] = useState(
    "border-gray-500 text-gray-500 ring-gray-200"
  );
  const [dotColor, setDotColor] = useState("bg-gray-500 ring-offset-gray-200");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await get_system_newest_status();
        if (data.status === "Success") {
          setStatus("All Systems Working");
          setStatusColor(
            "text-green-500 ring-green-200"
          );
          setDotColor("bg-green-500 ring-offset-green-200");
        } else if (data.status === "Error") {
          setStatus("Issues Detected");
          setStatusColor(
            "text-yellow-500 ring-yellow-200"
          );
          setDotColor("bg-yellow-500 ring-offset-yellow-200");
        } else {
          setStatus("Unknown Status");
          setStatusColor(
            "text-gray-500 ring-gray-200"
          );
          setDotColor("bg-gray-500 ring-offset-gray-200");
        }
      } catch (error) {
        setStatus("Error Fetching Status");
        setStatusColor("text-red-500 ring-red-200");
        setDotColor("bg-red-500 ring-offset-red-200");
      }
    };

    fetchStatus();
  }, []);

  return (
    <p
      className={`mr-2 inline-block ${statusColor} text-sm`}
    >
      <span
        className={`mr-2 inline-block h-2 w-2 rounded-full ${dotColor} ring-1 ring-white ring-offset-2 ${dotColor}`}
      ></span>
      Status: <span className="font-semibold">{status}</span>
    </p>
  );
};

export default StatusTag;
