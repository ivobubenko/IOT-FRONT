import LogoutButton from "../auth/LogoutButton";
import { useUser } from "../context/UserContext";
export default function LoggedUser() {
  const { user } = useUser();
  console.log(user.picture);

  return (
    <div>
      <h1>{user.given_name}</h1>
      <LogoutButton />
    </div>
  );
}
