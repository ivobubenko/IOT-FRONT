import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import {
  NewspaperIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import DeviceList from "./DeviceList";

export default function Dashboard() {
  const { devices } = useUser();
  return (
    <div className="flex mx-auto space-x-4 max-w-6xl py-5 min-h-96">
      <div className="container mx-auto border-solid  rounded max-w-5xl border-2 border-sky-500">
        <div className="flex justify-around w-full border border-x-2  divide-x">
          <Link
            to="/dashboard"
            className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
          >
            <h1 className="font-semibold">Overview</h1>
            <ChartPieIcon className="h-6 w-6 align" aria-hidden="true" />
          </Link>

          <Link
            to="./analytics"
            className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
          >
            <h1 className="font-semibold">Analytics</h1>
            <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            to="./reports"
            className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
          >
            <h1 className="font-semibold">Reports</h1>
            <NewspaperIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            to="./settings"
            className="px-4 py-2 text-black  flex justify-center w-full hover:bg-slate-400"
          >
            <h1 className="font-semibold">Settings</h1>
            <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
      <div className="container mx-auto  border-solid max-w- rounded border-2 border-sky-500 max-w-24">
        <h1 className="py-2 font-semibold">Your devices</h1>
        <ul>
          {devices?.map((device, id) => {
            return <DeviceList key={id} id={id} device={device} />;
          })}
        </ul>
      </div>
    </div>
  );
}
