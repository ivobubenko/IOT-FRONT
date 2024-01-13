export default function NewDevice() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-12  lg:px-8 rounded">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  px-2  rounded">
        <div className="bg-grey-500 border-[1px] py-1.5  px-1.5 rounded">
          <div className="mx-auto">
            <img
              className="mx-auto w-auto"
              src="https://designwanted.com/wp-content/uploads/2022/12/Modern-plant-pots-and-growers-cover.jpg"
              alt="futuristic pot"
            />
          </div>
          <form>
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
                className="text-xl block w-full text-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Device ID
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxlength="4"
                className="mx-auto text-center  block w-min rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
              <button
                type="submit"
                className="flex w-[70%] mx-auto mt-2 justify-center rounded-md bg-emerald-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add device
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
