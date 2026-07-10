"use client";

import { useEffect } from "react";
import { AmbientKey } from "@/src/theme/ambient";
import { useAmbientContext } from "./AmbientProvider";

export default function useAmbient(key: AmbientKey) {
  const { setCurrent } = useAmbientContext();

  useEffect(() => {
    setCurrent(key);
  }, [key, setCurrent]);
}