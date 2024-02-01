import { useUser } from "../../context/UserContext";
import Icon from "../Icon";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Analytics() {
  const { deviceData } = useUser();
  const [sortByDate, setSortByDate] = useState(false);

  const handleDate = () => {
    deviceData.reverse();
    setSortByDate(!sortByDate);
  };
  const formatDate = (timestamp) => {
    if (!timestamp) return "No data";

    // Convert to a JavaScript Date object
    const date = new Date(timestamp._seconds * 1000);

    // Format the date to yyyy-mm-dd
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const table = deviceData?.map((data, index) => {
    return (
      <tr key={index}>
        <td className="border">{formatDate(data?.date)}</td>

        <td className="border">
          {data?.temperature != null ? `${data.temperature}°C` : "No data"}
        </td>
        <td className="border">
          {data?.moisture != null ? `${data.moisture.toFixed(0)}%` : "No data"}
        </td>
        <td className="border">
          {data?.waterlevel != null
            ? `${data.waterlevel.toFixed(0)}%`
            : "No data"}
        </td>
      </tr>
    );
  });

  // <Icon src="happiness" alt="happy" text="Date" />
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border">
            <th onClick={handleDate} className="hover:bg-gray-200">
              <Icon src="calendar" alt="date" text="Date" />
            </th>
            <th>
              <Icon src="thermometer" alt="tmp" text="Temperature" />
            </th>
            <th>
              <Icon src="humidity" alt="humidity" text="Humidity" />
            </th>
            <th>
              <Icon src="water-level" alt="water-level" text="Water level" />
            </th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}
