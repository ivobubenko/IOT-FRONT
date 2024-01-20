import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../errors/Spinner";

import { useUser } from "../../context/UserContext";

export default function ConnectToDevice() {
  const { loadingDevices, connectDevice } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deviceId: "",
  });

  const handleDeviceId = (e) => {
    setFormData({ ...formData, deviceId: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(await connectDevice(formData.deviceId));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error fetching user devices:", error);
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8 rounded w-full md:w-full mx-auto ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-2 rounded md:w-full ">
        <div className="bg-grey-500 border-[1px] py-1.5 px-1.5 rounded">
          <div className="mx-auto">
            {loadingDevices ? (
              <Spinner />
            ) : (
              <form className="mt-2 py-6" onSubmit={handleSubmit}>
                <div className="mt-2 py-6">
                  <label
                    htmlFor="deviceId"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <h1>Add existing device Id</h1>
                  </label>

                  <input
                    type="text"
                    id="deviceId"
                    name="deviceId"
                    required
                    maxLength="6"
                    minLength="6"
                    onChange={handleDeviceId}
                    value={formData.deviceId}
                    className="text-xl text-center block w-full text-xl md:px-2 rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  <button
                    type="submit"
                    className="flex w-[70%] mx-auto mt-2 justify-center rounded-md bg-emerald-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
