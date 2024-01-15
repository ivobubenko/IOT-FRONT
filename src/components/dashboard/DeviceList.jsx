import { useUser } from "../../context/UserContext";

export default function DeviceList({ id, device }) {
  const { changeDevice, showedDevice } = useUser();
  const handleClick = () => {
    changeDevice(id);
  };
  return (
    <li className="hover:bg-slate-400 " key={id} id={id}>
      <button className="w-full" onClick={handleClick}>
        {device ? (
          <div
            className={`flex justify-items-stretch text-left py-2 px-2 ${
              showedDevice === id ? "bg-currentDevice" : ""
            } bg-opacity-10 space-x-4 truncate border-b-2`}
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
              Device: {device.name}
              <br />
              Actual health: 87%
            </div>
          </div>
        ) : (
          ""
        )}
      </button>
    </li>
  );
}
