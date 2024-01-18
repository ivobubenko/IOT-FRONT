import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Spinner from "../errors/Spinner";
import { TrashIcon } from "@heroicons/react/24/outline";

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
    <div className="h-full py-6">
      {!loading ? (
        <button
          className="border bg-red-100 py-2 px-2 text-center rounded border-2 border-red-500 "
          onClick={handleDelete}
        >
          Remove device
          <TrashIcon className="w-6 h-6 inline" />
        </button>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
