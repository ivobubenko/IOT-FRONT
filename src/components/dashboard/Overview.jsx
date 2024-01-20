import { useUser } from "../../context/UserContext";
import Spinner from "../errors/Spinner";

export default function Overview() {
  const { devices, showedDevice, loadingDeviceData } = useUser();

  return loadingDeviceData ? (
    <Spinner />
  ) : (
    <div className="w-full p-5 h-full">
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
