import { BotMessageSquare, PencilLine, SearchIcon } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col">
        <li className="flex-1">
          <Link
            href="/create-assistant"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#134B70]"
          >
            <BotMessageSquare className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Create</p>
              <p className="text-sm font-extralight">New Assistant</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/view-assistants"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#134B70]"
          >
            <PencilLine className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Edit</p>
              <p className="text-sm font-extralight"> Assistants</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/review-sessions"
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-[#134B70]"
          >
            <SearchIcon className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
                <p className="text-xl">Review</p>
                <p className="text-sm font-extralight">Sessions</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
