"use client";

import { Button } from "@/xt/components/ui/button";
import { Lightbulb, SwitchCamera } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button onClick={handleSetTheme} variant={"ghost"}>
      <Lightbulb className="w-5 h-5" />
      {/* {theme === "dark" ? "Dark" : "Light"} */}
    </Button>
  );
};

export default ThemeSwitcher;
