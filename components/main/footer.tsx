import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-wrap items-start justify-center gap-8 md:justify-around">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex h-auto min-w-[140px] flex-col items-center justify-start sm:min-w-[200px]"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="my-[12px] flex flex-row items-center text-center sm:my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Kinza Afzal {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
