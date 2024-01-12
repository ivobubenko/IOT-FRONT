export default function NewDevice() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mx-auto">
          <img
            className="mx-auto w-auto"
            src="https://designwanted.com/wp-content/uploads/2022/12/Modern-plant-pots-and-growers-cover.jpg"
            alt="futuristic pot"
          />
        </div>
        <form>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name of device
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="text-xl block w-full text-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>

          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Device ID
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="name"
              name="name"
              required
              maxlength="4"
              className="mx-auto text-center  block w-min rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add device
          </button>
        </form>
      </div>
    </div>
  );
}
