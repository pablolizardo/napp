"use client";

import { Button } from "@/xt/components/ui/button";
import { Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleSetTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button onClick={handleSetTheme} variant={"ghost"} size={'icon'}>
      <Lightbulb />
    </Button>
  );
};

export default ThemeSwitcher;
