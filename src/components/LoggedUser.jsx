import LogoutButton from "../auth/LogoutButton";
import { useUser } from "../context/UserContext";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import NotificationSettingsGroup from "../notification/NotificationSettingsGroup";

export default function LoggedUser() {
  const { user } = useUser();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={user?.photoURL}
            alt="user"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item key="0">
            {({ active }) => <LogoutButton active={active} />}
          </Menu.Item>
          <Menu.Item key="1">
            {({ active }) => <NotificationSettingsGroup active={active} />}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
