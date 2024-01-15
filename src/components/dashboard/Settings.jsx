import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Spinner from "../errors/Spinner";

export default function Settings() {
  const { removeDevice } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleDelete = async () => {
    setLoading(true);
    const resp = await removeDevice();
    if (!resp.success) alert(resp.message);
    navigate("/dashboard");
    setLoading(false);
  };
  return (
    <div>
      {!loading ? (
        <button
          className="border bg-red-100 py-2 px-2 text-center rounded "
          onClick={handleDelete}
        >
          Remove device
        </button>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
