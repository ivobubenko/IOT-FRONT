import { useUser } from "../../context/UserContext";

export default function DashboardContent() {
  const { devices, showedDevice } = useUser();
  console.log(devices);
  //return <div>{devices ? devices[showedDevice].name : "este nit"}</div>;
  return (
    <div className="w-full text-9xl font-semibold ">
      <h1 className="font-semibold  py-2 border-b-2">
        {devices[showedDevice]?.name}
      </h1>
      <div className="py-2 ">
        <h1 className="px-4 py-2 text-black border-b-2 flex justify-center ">
          Waterings: 2
        </h1>
        <h1 className="px-4 py-2 text-black border-b-2 flex justify-center ">
          Humidity: 2 💦
        </h1>
        <h1 className="px-4 py-2 text-black border-b-2 flex justify-center ">
          Plant state: 75% 🪴
        </h1>
        <h1 className="px-4 py-2 text-black border-b-2 flex justify-center ">
          Battery: 70% 🔋
        </h1>
      </div>
    </div>
  );
}
