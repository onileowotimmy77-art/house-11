"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import type { AmbientKey } from "@/src/theme/ambient";

interface AmbientContextValue {
  current: AmbientKey;
  setCurrent: React.Dispatch<React.SetStateAction<AmbientKey>>;
}

const AmbientContext =
  createContext<AmbientContextValue | null>(null);

export function AmbientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] =
    useState<AmbientKey>("hero");

  return (
    <AmbientContext.Provider
      value={{
        current,
        setCurrent,
      }}
    >
      {children}
    </AmbientContext.Provider>
  );
}

export function useAmbientContext() {
  const context = useContext(AmbientContext);

  if (!context) {
    throw new Error(
      "useAmbientContext must be used inside AmbientProvider."
    );
  }

  return context;
}