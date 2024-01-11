import { useUser } from "../../context/UserContext";

export default function DeviceList({ id, device }) {
  const { changeDevice } = useUser();
  const handleClick = () => {
    changeDevice(id);
  };
  return (
    <li key={id}>
      <button onClick={handleClick}>{device?.name}</button>
    </li>
  );
}
