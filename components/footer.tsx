"use client";

import React from "react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="flex items-center justify-between">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Hadist of the day. All rights
        reserved.
      </p>
      <div className="flex items-center gap-x-2">
        <Button
          variant={"outline"}
          onClick={() => {
            router.refresh();
          }}
        >
          <RefreshCcw
            size={16}
            className="mr-1"
          />
          <span>Regenerate</span>
        </Button>
        <ModeToggle />
      </div>
    </footer>
  );
}
