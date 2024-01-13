import LogoutButton from "../auth/LogoutButton";
import { useUser } from "../context/UserContext";
export default function LoggedUser() {
  const { user } = useUser();

  return (
    <div>
      <h1>{user?.displayName}</h1>
      <LogoutButton />
    </div>
  );
}
