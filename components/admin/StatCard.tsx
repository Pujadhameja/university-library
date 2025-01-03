import Image from "next/image";

import { cn } from "@/lib/utils";

interface Props {
  label: string;
  count: number;
  changeAmount: number;
  isStatIncrease: boolean;
}

const StatCard = ({ label, count, changeAmount, isStatIncrease }: Props) => {
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

export default StatCard;
