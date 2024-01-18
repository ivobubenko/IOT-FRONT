import { useUser } from "../../context/UserContext";

export default function Analytics() {
  const { deviceData } = useUser();

  return <div>Analytics{deviceData}</div>;
}
