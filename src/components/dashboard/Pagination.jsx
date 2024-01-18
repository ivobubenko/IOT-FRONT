import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

import { useUser } from "../../context/UserContext";

export default function Pagination() {
  const { devices, showedDevice, changeDevice } = useUser();
  const handleNext = (e) => {
    e.preventDefault();
    changeDevice(showedDevice + 1 >= devices.length ? 0 : showedDevice + 1);
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    changeDevice(showedDevice - 1 < 0 ? devices.length - 1 : showedDevice - 1);
  };
  const active =
    "z-10 bg-currentDevice text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-currentDevice px-2 rounded ";
  const notActive =
    "text-gray-900 ring-1 ring-inset ring-gray-300 rounded hover:bg-gray-50 focus:outline-offset-0 px-2.5";

  return (
    <div className="bg-teal-50 md:justify-between">
      <div className="flex flex-1 justify-between sm:hidden max-w-full">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm max-w-full justify-between"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrevious}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          {devices?.map((device, id) => (
            <button
              key={id}
              onClick={() => changeDevice(id)}
              aria-current="page"
              className={`${id === showedDevice ? active : notActive}`}
            >
              {id + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
