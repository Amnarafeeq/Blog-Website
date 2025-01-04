import React from "react";
import { PortableTextComponents } from "@portabletext/react";

const CustomComponents: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-800">{children}</h3>
    ),
  },
};

export default CustomComponents;
