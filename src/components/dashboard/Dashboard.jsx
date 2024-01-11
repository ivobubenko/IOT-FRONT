import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import DeviceList from "./DeviceList";

export default function Dashboard() {
  const { devices } = useUser();
  return (
    <div className="flex mx-auto space-x-4 max-w-6xl py-5 min-h-96">
      <div className="container mx-auto border-solid  rounded max-w-5xl border-2 border-sky-500">
        <div className="flex justify-around w-full border border-x-2">
          <Link
            to="/dashboard"
            className="px-4 py-2 text-black text-center  w-full  hover:bg-slate-400"
          >
            Dashboard
          </Link>
          <Link
            to="./analytics"
            className="px-4 py-2 text-black  text-center w-full hover:bg-slate-400"
          >
            Analytics
          </Link>
          <Link
            to="./reports"
            className="px-4 py-2 text-black  text-center w-full  hover:bg-slate-400"
          >
            Reports
          </Link>
          <Link
            to="./settings"
            className="px-4 py-2 text-black text-center w-full  hover:bg-slate-400"
          >
            Settings
          </Link>
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
      <div className="container mx-auto  border-solid max-w- rounded border-2 border-sky-500 max-w-24">
        <ul>
          {devices?.map((device, id) => {
            return <DeviceList key={id} id={id} device={device} />;
          })}
        </ul>
      </div>
    </div>
  );
}
