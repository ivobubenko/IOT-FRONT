import { useState } from "react";
import { addDevice } from "./api";

export default function NewDevice() {
  const [formData, setFormData] = useState({
    name: "",
    deviceId: "",
    selectedPlant: "", // New state for the selected plant
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlantSelectChange = (e) => {
    setFormData({ ...formData, selectedPlant: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your addDevice function with formData
    addDevice(formData);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8 rounded w-full md:w-full mx-auto ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-2 rounded md:w-full ">
        <div className="bg-grey-500 border-[1px] py-1.5 px-1.5 rounded">
          <div className="mx-auto">
            <img
              className="mx-auto w-auto"
              src="https://designwanted.com/wp-content/uploads/2022/12/Modern-plant-pots-and-growers-cover.jpg"
              alt="futuristic pot"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-2 py-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name of device
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="text-xl text-center block w-full text-xl rounded-md border-0 py-1.5 md:px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="deviceId"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Device ID
              </label>
              <input
                type="text"
                id="deviceId"
                name="deviceId"
                required
                maxLength="4"
                minLength="4"
                value={formData.deviceId}
                onChange={handleInputChange}
                className="text-xl text-center block w-full text-xl md:px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="selectedPlant"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select Plant
              </label>
              <select
                id="selectedPlant"
                name="selectedPlant"
                required
                value={formData.selectedPlant}
                onChange={handlePlantSelectChange}
                className="mx-auto text-center block w-min  max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="" disabled>
                  Select a plant
                </option>
                <option value="Paprika">Paprika</option>
                <option value="Sunflower">Sunflower</option>
                <option value="Rose">Rose</option>
                <option value="Cactus">Cactus</option>
              </select>
            </div>
            <button
              type="submit"
              className="flex w-[70%] mx-auto mt-2 justify-center rounded-md bg-emerald-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add device
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
