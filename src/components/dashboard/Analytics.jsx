import Icon from "../Icon";

export default function Analytics() {
  const data = {
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
  const dataArr = [data, data1, data3];

  const collectedDataToTable = dataArr.map((data, index) => {
    return (
      <tr key={index}>
        <td className="border">{data.temperature}</td>
        <td className="border">{data.humidity}</td>
        <td className="border">{data.sunIntensity}</td>
        <td className="border">{data.deppression}</td>
      </tr>
    );
  });

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border">
            <th>
              <Icon src="thermometer" alt="tmp" text="Temperature" />
            </th>
            <th>
              <Icon src="humidity" alt="humidity" text="Humidity" />
            </th>
            <th>
              <Icon src="sun" alt="sun" text="Sun Intensity" />
            </th>
            <th>
              <Icon src="happiness" alt="happy" text="Health" />
            </th>
          </tr>
        </thead>
        <tbody>{collectedDataToTable}</tbody>
      </table>
    </div>
  );
}
