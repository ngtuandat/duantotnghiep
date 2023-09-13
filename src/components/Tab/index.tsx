import { Tabs } from "@mantine/core";

import React, { ReactNode } from "react";

interface TabProps {
  tabs: {
    value: string;
    content: string;
    panel?: ReactNode;
  }[];
  handleChangeValue: React.Dispatch<React.SetStateAction<string | any>>;
  value: string | null;
}

const Tab = ({ tabs, handleChangeValue, value }: TabProps) => {
  return (
    <Tabs
      value={value}
      onTabChange={handleChangeValue}
      unstyled
      className=" w-fit text-desc text-lg font-medium rounded-full px-2.5 py-1"
    >
      <Tabs.List className="border-none outline-none flex items-center gap-x-2 bg-[rgba(0,0,0,0.2)] px-1 py-1 rounded-full">
        {tabs.map((item, idx) => (
          <Tabs.Tab
            key={idx}
            value={item.value}
            className={`transition-all duration-300 py-1  ${
              item.value === value
                ? "bg-primary rounded-full px-4 text-white"
                : "text-black px-2"
            }`}
          >
            {item.content}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
    // <div className="text-black">ngtuandat</div>
  );
};

export default Tab;
