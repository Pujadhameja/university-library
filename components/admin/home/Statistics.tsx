import Image from "next/image";

import { cn } from "@/lib/utils";
import { getStatistics } from "@/lib/admin/actions/general";

interface StatCardProps {
  label: string;
  count: number;
  changeAmount: number;
  isStatIncrease: boolean;
}

const StatCard = ({
  label,
  count,
  changeAmount,
  isStatIncrease,
}: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl p-5 space-y-5 flex-1">
      <div className="flex justify-between items-center gap-5">
        <p className="font-medium text-base text-light-500 whitespace-nowrap">
          {label}
        </p>
        <div className="flex items-center gap-1">
          <Image
            src={
              isStatIncrease
                ? "/icons/admin/caret-up.svg"
                : "/icons/admin/caret-down.svg"
            }
            alt="caret-down"
            width={14}
            height={14}
            className="object-contain"
          />
          <p
            className={cn(!isStatIncrease ? "text-red-500" : "text-green-500")}
          >
            {changeAmount}
          </p>
        </div>
      </div>
      <p className="font-semibold text-3xl text-dark-400">
        {count < 10 ? `0${count}` : count}
      </p>
    </div>
  );
};

const Statistics = async () => {
  const { data: stats } = await getStatistics();

  if (!stats) {
    throw new Error("Failed to fetch statistics");
  }

  return (
    <section className="flex flex-wrap min-w-fit gap-5">
      <StatCard
        label="Borrowed Books"
        count={stats?.borrowRecord.total!}
        changeAmount={stats?.borrowRecord.change!}
        isStatIncrease={stats?.borrowRecord.change! > 0}
      />
      <StatCard
        label="Total Users"
        count={stats?.user.total!}
        changeAmount={stats?.user.change!}
        isStatIncrease={stats?.user.change! > 0}
      />
      <StatCard
        label="Total Books"
        count={stats?.book.total!}
        changeAmount={stats?.book.change!}
        isStatIncrease={stats?.book.change! > 0}
      />
    </section>
  );
};

export default Statistics;
