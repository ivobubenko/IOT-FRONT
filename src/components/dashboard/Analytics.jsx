import { useUser } from "../../context/UserContext";
import Icon from "../Icon";

export default function Analytics() {
  /*const data = {
    temperature: 13,
    humidity: 10,
    sunIntensity: 0.5,
    deppression: 100,
  };
  const data1 = {
    temperature: 13,
    humidity: 10,
    sunIntensity: 0.5,
    deppression: 100,
  };
  const data3 = {
    temperature: 13,
    humidity: 10,
    sunIntensity: 0.5,
    deppression: 100,
  };
  const dataArr = [data, data1, data3];*/

  const { deviceData } = useUser();

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
        <td className="border">{data?.temperature ?? "No data"}</td>
        <td className="border">{data?.moisture?.toFixed(2) ?? "No data"}</td>
        <td className="border">{data?.waterlevel ?? "No data"}</td>
      </tr>
    );
  });

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border">
            <th>
              <Icon src="happiness" alt="happy" text="Date" />
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
