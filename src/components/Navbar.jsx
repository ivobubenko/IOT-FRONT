import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
//import { handleSubscribeClick } from "./notification";
import LoggedUser from "./LoggedUser";

import { requestPermission } from "../notification/notification";
import NotificationSettingsGroup from "../notification/NotificationSettingsGroup";

const navigation = [
  { name: "Dashboard", to: "/dashboard", current: false },

  { name: "Add new device", to: "/newDevice", current: false },
  { name: "Connect to device", to: "/connectDevice", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  /*
  const { user } = useUser();
  const userClone = Object.assign({}, user);
*/

  return (
    <Disclosure as="nav" className="bg-teal-100 md:justify-between">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center bg-gray-200 justify-center rounded-md p-2 text-black hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={process.env.PUBLIC_URL + "logo.png"}
                    alt="Smart-Pot"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-black"
                            : "text-black hover:bg-teal-200 hover:text-black",
                          "rounded-md  px-3 py-2 text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <h1>{item.name}</h1>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-auto h-full absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div id="notification-container">
                  <button
                    type="button"
                    id="notification-permission-button"
                    onClick={() => requestPermission()}
                    className="relative rounded-full bg-gray-200 p-1 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {<LoggedUser />}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-black"
                      : "text-black hover:bg-gray-200 hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
