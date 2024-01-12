import { useUser } from "../../context/UserContext";

export default function DeviceList({ id, device }) {
  const { changeDevice } = useUser();
  const handleClick = () => {
    changeDevice(id);
  };
  return (
    <li className="hover:bg-slate-400" key={id}>
      <button className="w-full" onClick={handleClick}>
        {device?.name}
      </button>
    </li>
  );
}
