"use client";

import { login } from "@/actions/auth";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action, pending] = useFormState(login, undefined);

  return (
    <form action={action}>
      <div className="grid place-content-center">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 w-72">
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  name="username"
                  type="text"
                  placeholder="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 w-72">
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        {state?.message && <p className="mt-2 text-red-600">{state.message}</p>}
        <div className="mt-5 grid grid-cols-1 items-center place-items-center">
          <button
            type="submit"
            className="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <UserCircleIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            />
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
