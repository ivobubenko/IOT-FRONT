import { useUser } from "../../context/UserContext";

export default function DashboardContent() {
  const { devices, showedDevice } = useUser();

  return (
    /*
    <div className="w-full text-9xl font-semibold ">
      <h1 className="font-semibold  py-2 border-b-2">
        {devices[showedDevice]?.name}
      </h1>
    </div>
  );*/

    <div className="w-full p-5">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        {devices[showedDevice]?.name}
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">Temperature</span>
          <span className="text-2xl font-bold">{10}°C</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">Sun Exposure</span>
          <span className="text-2xl font-bold">{2}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">Humidity</span>
          <span className="text-2xl font-bold">{0.4}%</span>
        </div>
      </div>
    </div>
  );
}
