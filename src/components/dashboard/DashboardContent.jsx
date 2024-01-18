import { useUser } from "../../context/UserContext";

export default function DashboardContent() {
  const { devices, showedDevice } = useUser();

  return (
    <div className="w-full text-9xl font-semibold ">
      <h1 className="font-semibold  py-2 border-b-2">
        {devices[showedDevice]?.name}
      </h1>
    </div>
  );
}
