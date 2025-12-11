import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Have A Nice Day",
      fileSize: "0.8MB",
      close: false,
      tag: {
        isYesNo: true,
        tagColour: "bg-blue-600",
      },
    },
    {
      desc: "Project Report Uploaded",
      fileSize: "1.2MB",
      close: false,
      tag: {
        isYesNo: false,
        tagColour: "bg-green-600",
      },
    },
    {
      desc: "System Update Available",
      fileSize: "512KB",
      close: true,
      tag: {
        isYesNo: true,
        tagColour: "bg-yellow-500",
      },
    },
    {
      desc: "Meeting Notes Synced",
      fileSize: "2.4MB",
      close: false,
      tag: {
        isYesNo: false,
        tagColour: "bg-purple-600",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="p-5 fixed top-0 left-0  z-[3] w-full h-full flex items-center justify-center flex-wrap gap-x-9 gap-y-4"
    >
      {data.map((item, idx) => (
        <Card
          key={idx}
          info={item.desc}
          filesize={item.fileSize}
          close={item.close}
          tagCorO={item.tag.isYesNo}
          color={item.tag.tagColour}
          reference={ref}
        />
      ))}
    </div>
  );
};

export default Foreground;
