import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import {
  NewspaperIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChartPieIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import DeviceList from "./DeviceList";
import Pagination from "./Pagination";
import Spinner from "../errors/Spinner";

export default function Dashboard() {
  const { devices, user, loadingDevices } = useUser();

  const hasDevices = () => {
    const oneEmpty = !!(devices.length === 1 && !devices[0].name);
    return oneEmpty || devices.length === 0 ? false : true;
  };

  const outputComponent = () => {
    return hasDevices() ? (
      <Outlet />
    ) : (
      <div className="mx-auto h-full text-9xl font-semibold ">
        {`${user?.displayName.split(" ").at(0)} you have no devices yet :(`}
      </div>
    );
  };

  return (
    <>
      <div className="flex mx-auto max-w-7xl py-5 min-h-96 max-h-[70vh]">
        <div className="flex flex-col mx-auto border-solid min-[320px]:w-screen rounded max-w-5xl border-2 border-grey-200 overflow-auto ">
          <div className="flex flex-row justify-around w-full border border-x-2  divide-x">
            <Link
              to="/dashboard"
              className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
            >
              <h1 className="font-semibold hidden sm:inline">Overview</h1>
              <ChartPieIcon className="h-6 w-6 align" aria-hidden="true" />
            </Link>

            <Link
              to="./analytics"
              className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
            >
              <h1 className="font-semibold hidden sm:inline">Analytics</h1>
              <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              to="./reports"
              className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
            >
              <h1 className="font-semibold hidden sm:inline">Reports</h1>
              <NewspaperIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              to="./settings"
              className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
            >
              <h1 className="font-semibold hidden sm:inline">Settings</h1>
              <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex flex-row overflow-auto h-full">
            {loadingDevices ? <Spinner /> : outputComponent()}
          </div>
        </div>
        <div className="container border-solid w-full rounded border-2 border-grey-200  max-w-60 overflow-auto hidden sm:inline">
          <h1 className="py-2 font-semibold border-b-[1px] ">Your devices</h1>
          <ul className="list-none h-full">
            {devices?.map((device, id) => {
              return <DeviceList key={id} id={id} device={device} />;
            })}
            <Link to="/newDevice">
              <li
                className="h-auto flex items-center justify-center"
                key={devices.length}
                id={devices.length}
              >
                <PlusCircleIcon className="h-10 w-10" aria-hidden="true" />{" "}
                <p />
                Add new device
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-row mx-auto justify-center sm:hidden ">
        <Pagination />
      </div>
    </>
  );
}
