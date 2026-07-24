"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type EntranceState =
  | "idle"
  | "preparing"
  | "welcome"
  | "transitioning"
  | "entered";

interface EntranceContextType {
  entranceState: EntranceState;

  setEntranceState: (
    state: EntranceState
  ) => void;

  enterHouse: () => void;
}

const EntranceContext =
  createContext<EntranceContextType | null>(null);

export function EntranceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    entranceState,
    setEntranceState,
  ] = useState<EntranceState>("idle");

  function enterHouse() {
  if (entranceState !== "idle") return;

  setEntranceState("preparing");

  window.setTimeout(() => {
    setEntranceState("welcome");
  }, 350);

  window.setTimeout(() => {
    setEntranceState("transitioning");
  }, 950);
}
  return (
    <EntranceContext.Provider
      value={{
        entranceState,
        setEntranceState,
        enterHouse,
      }}
    >
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  const context = useContext(
    EntranceContext
  );

  if (!context) {
    throw new Error(
      "useEntrance must be used inside EntranceProvider"
    );
  }

  return context;
}