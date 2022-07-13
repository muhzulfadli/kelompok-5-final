import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { BiUser, BiLogOut } from "react-icons/bi";
import { RiSettings4Fill } from "react-icons/ri";

const Dropdown = () => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center w-full mb-1 bg-white text-lg font-medium focus:outline-none cursor-pointer">
          <BiUser className="cursor-pointer" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className="text-purple4 flex items-center gap-4 px-4 py-2 text-sm font-medium"
                >
                  <img src="/images/picprofile.png" alt="profile" className="rounded-full" />
                  Username
                  </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/infoprofile"
                  className={classNames(
                    active ? "bg-gray-100 text-purple4" : "text-gray-700",
                    "flex items-center gap-2 px-4 py-2 mt-2 text-sm"
                  )}
                >
                  <RiSettings4Fill />
                  Akun Saya
                </Link>
              )}
            </Menu.Item>
            <Link to="/logout">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-purple4" : "text-gray-700",
                      "flex items-center gap-2 w-full text-left px-4 py-3 mb-3 text-sm"
                    )}
                  >
                    <BiLogOut />
                    Keluar
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;