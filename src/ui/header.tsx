import {
  MapPinIcon,
  PencilIcon,
  PhoneArrowDownLeftIcon,
  EnvelopeOpenIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { getByKey } from "@/actions/profile-data";
import { ProfileDataType } from "@/lib/definitions";
import Link from "next/link";
import { verifySession } from "@/lib/session";
import { logout } from "@/actions/auth";

async function AuthButtons() {
  const verifiedSession = await verifySession();

  if (verifiedSession.isAuth) {
    return (
      <form action={logout}>
        <button
          type="submit"
          className="ml-3 inline-flex items-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <UserCircleIcon
            aria-hidden="true"
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
          />
          Logout
        </button>
      </form>
    );
  } else {
    return (
      <Link href={"/login"}>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-green-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <UserCircleIcon
            aria-hidden="true"
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
          />
          Login
        </button>
      </Link>
    );
  }
}

export default async function Header() {
  const firstName = await getByKey(ProfileDataType.FirstName);
  const lastName = await getByKey(ProfileDataType.LastName);
  const role = await getByKey(ProfileDataType.Role);
  const phone = await getByKey(ProfileDataType.Phone);
  const email = await getByKey(ProfileDataType.Email);
  const location = await getByKey(ProfileDataType.Location);

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <Link href={"/"}>
          <h2 className="text-2xl uppercase font-bold leading-7 text-blue-800 sm:truncate sm:text-3xl sm:tracking-tight">
            {firstName?.value} {lastName?.value}
          </h2>
        </Link>
        <h3 className="mt-2 text-lg font-bold leading-7 text-orange-400 sm:truncate sm:text-xl sm:tracking-tight">
          {role?.value}
        </h3>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <PhoneArrowDownLeftIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            />
            {phone?.value}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <EnvelopeOpenIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            />
            {email?.value}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon
              aria-hidden="true"
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            />
            {location?.value}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PencilIcon
            aria-hidden="true"
            className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
          />
          Edit
        </button>
        <AuthButtons />
      </div>
    </div>
  );
}
