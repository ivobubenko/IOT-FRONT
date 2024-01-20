export default function Reports() {
  const data = [
    { date: "2024-01-20", message: "Water needed", urgency: "High" },
    { date: "2024-01-21", message: "Fertilizer time", urgency: "Medium" },
    { date: "2024-01-22", message: "All good", urgency: "Low" },
    { date: "2024-01-20", message: "Water needed", urgency: "High" },
    { date: "2024-01-21", message: "Fertilizer time", urgency: "Medium" },
    { date: "2024-01-22", message: "All good", urgency: "Low" },
    // Add more data as needed
  ];
  const colorUrgency = (urg) => {
    if (urg === "High") {
      return "bg-red-200 bg-opacity-40";
    } else if (urg === "Medium") {
      return "bg-yellow-200 bg-opacity-40";
    } else {
      return "bg-green-200 bg-opacity-40";
    }
  };

  return (
    <div className="flex w-full relative shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6 w-1/4">
              Date
            </th>
            <th scope="col" className="py-3 px-6 w-1/2 break-words">
              Message
            </th>
            <th scope="col" className="py-3 px-6 w-1/4">
              Urgency
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-6">{item.date}</td>
              <td className="py-4 px-6 break-words">{item.message}</td>
              <td className={`py-4 px-6 ${colorUrgency(item.urgency)}`}>
                {item.urgency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
