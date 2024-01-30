import { useUser } from "../../context/UserContext";
import { HeartIcon, Battery0Icon } from "@heroicons/react/24/outline";

export default function DeviceList({ id, device }) {
  const { changeDevice, showedDevice } = useUser();
  const handleClick = () => {
    changeDevice(id);
  };
  const battery = Math.floor(Math.random() * 100);
  const calculateColor = (battery) => {
    if (battery >= 70) {
      return "fill-green-500";
    } else if (battery >= 40) {
      return "fill-amber-500";
    } else {
      return "fill-red-500";
    }
  };
  console.log(calculateColor(battery));
  return (
    <li className="hover:bg-teal-200 " key={id} id={id}>
      <button className="w-full" onClick={handleClick}>
        {device ? (
          <div
            className={`flex justify-items-stretch text-left py-2 px-2 ${
              showedDevice === id ? "bg-teal-100" : ""
            } space-x-4 truncate border-b-2 `}
          >
            <div className="justify-self-start min-w-12 min-h-12">
              <img
                className="h-12 w-12 object-cover"
                aria-hidden="true"
                src={process.env.PUBLIC_URL + "/Icons/planter.png"}
                alt="planter"
              />
            </div>
            <div className="justify-self-end">
              {device.name}
              <br />
              <Battery0Icon
                className={`${calculateColor(
                  battery
                )} h-6 w-6 object-cover inline `}
              />
              {"  "}
              {battery}%
            </div>
          </div>
        ) : (
          ""
        )}
      </button>
    </li>
  );
}
