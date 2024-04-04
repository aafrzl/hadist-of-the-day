import React from "react";
import { Card, CardContent } from "./ui/card";

interface HadistProps {
  data: {
    id: number;
    hadist: string;
    author: string;
  };
}

export default function Hadist({ data }: HadistProps) {
  return (
    <Card>
      <CardContent className="space-y-6 py-4">
        <p className="text-gray-800 dark:text-gray-100 tracking-tight leading-relaxed text-justify">
          {data.hadist}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {data.author}
        </p>
      </CardContent>
    </Card>
  );
}
