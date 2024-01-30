import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Spinner from "../errors/Spinner";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Settings() {
  const { removeDevice, changeDeviceName, loadingDeviceData } = useUser(); // Assuming updateDeviceName is a function in your context

  const [deviceName, setDeviceName] = useState(""); // New state for device name
  const navigate = useNavigate();

  const handleDelete = async () => {
    const resp = await removeDevice();

    if (!resp.success) {
      alert(resp.message);
    } else {
      navigate("/dashboard");
    }
  };

  const handleNameChangeSubmit = async (e) => {
    e.preventDefault();
    if (!deviceName.trim()) {
      alert("Please enter a valid name.");
      return;
    }
    console.log(await changeDeviceName(deviceName));
    navigate("/dashboard");
  };

  return (
    <div className=" py-6 flex flex-col mx-auto items-center justify-center space-y-4">
      {loadingDeviceData ? (
        <Spinner />
      ) : (
        <>
          <div className="border rounded px-4 py-4">
            <form
              onSubmit={handleNameChangeSubmit}
              className="w-full max-w-xs py-4"
            >
              <label
                htmlFor="deviceName"
                className="block text-sm font-medium text-gray-700"
              >
                Change Device Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="deviceName"
                  id="deviceName"
                  value={deviceName}
                  onChange={(e) => setDeviceName(e.target.value)}
                  placeholder="New device name"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent bg-green-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update Name
              </button>
            </form>
          </div>
          <button
            className="border bg-red-100 py-2 px-4 text-center rounded border-2 border-red-500 hover:bg-red-200 flex items-center justify-right"
            onClick={handleDelete}
          >
            <TrashIcon className="w-6 h-6 mr-2" />
            Remove Device
          </button>
        </>
      )}
    </div>
  );
}
