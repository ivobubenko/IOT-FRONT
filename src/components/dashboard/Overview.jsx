import { useUser } from "../../context/UserContext";
import Spinner from "../errors/Spinner";
import Icon from "../Icon";

export default function Overview() {
  const { devices, showedDevice, loadingDeviceData, deviceData } = useUser();

  const actualData =
    deviceData && deviceData.length > 0
      ? deviceData.reduce((prev, current) => {
          return prev?.date?._seconds > current?.date?._seconds
            ? prev
            : current;
        })
      : null;
  /*<div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>*/
  //<div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
  console.log(actualData);
  return loadingDeviceData ? (
    <Spinner />
  ) : (
    <div className="flex flex-col w-full p-3 bg-gradient-to-r from-[#ccffeb]/60 to-[#ccfff5]/30">
      <div className="flex w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4 w-full">
          {devices[showedDevice]?.name}
        </h1>
      </div>

      <div className="flex flex-row items-center justify-around h-full">
        <div className="flex w-full h-full justify-around items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl pr-4 bg-cyan-200">
          <div className="text-lg font-semibold px-2 hover:text-purple-500 transition-colors duration-300 ">
            <Icon src="thermometer" alt="tmp" text=" " height="20" width="20" />
            <span className="text-2xl font-bold">
              {actualData?.temperature ?? "No data"}°C
            </span>
          </div>
        </div>
        <div className="flex w-full h-full justify-around items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl pr-4 bg-cyan-300">
          <div className="text-lg font-semibold px-2 hover:text-purple-500 transition-colors duration-300 ">
            <Icon src="water-level" alt="tmp" text=" " height="20" width="20" />
            <span className="text-2xl font-bold">
              {actualData?.waterlevel?.toFixed(0) ?? "No data"}%
            </span>
          </div>
        </div>
        <div className="flex w-full h-full justify-around items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl pr-4 bg-cyan-400">
          <div className="text-lg font-semibold px-2 hover:text-purple-500 transition-colors duration-300 ">
            <Icon src="humidity" alt="tmp" text=" " height="20" width="20" />
            <span className="text-2xl font-bold">
              {actualData?.moisture?.toFixed(0) ?? "No data"}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
