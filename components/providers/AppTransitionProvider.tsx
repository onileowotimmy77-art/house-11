"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

interface AppTransitionContextType {
  ready: boolean;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppTransitionContext =
  createContext<AppTransitionContextType | null>(null);

export function AppTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  return (
    <AppTransitionContext.Provider
      value={{
        ready,
        setReady,
      }}
    >
      {children}
    </AppTransitionContext.Provider>
  );
}

export function useAppTransition() {
  const context = useContext(AppTransitionContext);

  if (!context) {
    throw new Error(
      "useAppTransition must be used inside AppTransitionProvider."
    );
  }

  return context;
}