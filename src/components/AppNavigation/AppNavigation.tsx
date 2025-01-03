import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { Clock, CirclePlus, ChartNoAxesCombined } from "lucide-react";

type AppNavigationProps = {
  value: string;
  setValue: (value: string) => void;
};

const AppNavigation: React.FC<AppNavigationProps> = ({ value, setValue }) => {
  const getNavItemClass = (navValue: string) => {
    return ` ${value === navValue ? "text-indigo-300" : "text-indigo-600"}`;
  };

  return (
    <div className="flex flex-col w-16 h-5/6 bg-white rounded-2xl justify-between">
      <div className="flex flex-col items-start justify-center w-full h-1/2">
        <div
          className="group flex items-center justify-center w-full h-fit py-4 gap-4 cursor-pointer hover:w-fit hover:bg-white hover:px-8"
          onClick={() => setValue("statistika")}
        >
          <ChartNoAxesCombined
            size={24}
            className={getNavItemClass("statistika")}
          />
          <p className="text-l text-gray-500 font-sans hidden group-hover:block">
            Statistika
          </p>
        </div>
        <div
          className="group flex items-center justify-center w-full h-fit py-4 gap-4 cursor-pointer hover:w-fit hover:bg-white hover:px-8"
          onClick={() => setValue("dodaj")}
        >
          <CirclePlus size={24} className={getNavItemClass("dodaj")} />
          <p className="text-l text-gray-500 font-sans hidden group-hover:block">
            Dodaj
          </p>
        </div>
        <div
          className="group flex items-center justify-center w-full h-fit py-4 gap-4 cursor-pointer hover:w-fit hover:bg-white hover:px-8"
          onClick={() => setValue("istorija")}
        >
          <Clock size={24} className={getNavItemClass("istorija")} />
          <p className="text-l text-gray-500 font-sans hidden group-hover:block">
            Istorija
          </p>
        </div>
      </div>
      <div className="group flex items-center justify-center w-full h-fit py-4 gap-4 cursor-pointer hover:w-fit hover:bg-white hover:px-8">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <p className="text-l text-gray-500 font-sans hidden group-hover:block">
          Profil
        </p>
      </div>
    </div>
  );
};

export default AppNavigation;
