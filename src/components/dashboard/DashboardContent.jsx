import { Context, useContext } from "react";

import { useUser } from "../../context/UserContext";

export default function DashboardContent() {
  const { user, login, logout, devices, showedDevice } = useUser();
  console.log(devices);
  return <div>{devices ? devices[showedDevice].name : "este nit"}</div>;
}
