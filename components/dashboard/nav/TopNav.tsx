import React from "react";

import Search from "@/components/dashboard/Search";

const TopNav = () => {
  return (
    <section className="mt-6 flex w-full flex-row justify-between max-lg:flex-col">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-dark-400">
          Welcome, Adrian
        </h1>
        <p className="text-slate-500">
          Monitor all of your projects and tasks here
        </p>
      </div>
      <div>
        <Search />
      </div>
    </section>
  );
};

export default TopNav;
