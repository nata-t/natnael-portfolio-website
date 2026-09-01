"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CursorContextType = {
  activeType: "default" | "magnetic" | "view" | "hidden";
  setActiveType: (type: "default" | "magnetic" | "view" | "hidden") => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [activeType, setActiveType] = useState<"default" | "magnetic" | "view" | "hidden">("default");

  return (
    <CursorContext.Provider value={{ activeType, setActiveType }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
