import { Session } from "next-auth";

import Search from "./Search";
const Header = ({ session }: { session: Session }) => {
  return (
    <header className="flex lg:items-end items-start justify-between lg:flex-row flex-col gap-5 sm:mb-10 mb-5">
      <div>
        <h2 className="text-dark-400 font-semibold text-2xl">
          {session?.user?.name}
        </h2>
        <p className="text-slate-500 text-base">
          Monitor all of your projects and tasks here
        </p>
      </div>

      <Search />
    </header>
  );
};

export default Header;
