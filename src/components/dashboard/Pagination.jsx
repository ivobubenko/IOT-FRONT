import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { useUser } from "../../context/UserContext";

export default function Pagination() {
  const { devices, showedDevice, changeDevice } = useUser();
  const handleNext = (e) => {
    if (showedDevice + 1 >= devices.length) return;

    changeDevice(showedDevice + 1);
    e.preventDefault();
  };
  const handlePrevious = (e) => {
    if (showedDevice - 1 < 0) return;

    changeDevice(showedDevice - 1);

    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevious}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </nav>
        </div>
      </div>
    </div>
  );
}
