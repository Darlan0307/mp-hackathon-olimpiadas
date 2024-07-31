"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CountryType } from "@/@types/country-type";
import { useWidthScreen } from "@/hooks/width-screen";
import { useCallback, useEffect, useState } from "react";

const chartConfig = {
  gold_medals: {
    label: "Gold Medals",
    color: "hsl(var(--chart-1))",
  },
  silver_medals: {
    label: " Silver Medals",
    color: "hsl(var(--chart-2))",
  },
  bronze_medals: {
    label: "Bronze Medals",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

type ColChartComponentProps = {
  data: CountryType[];
};

const colors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
];

export function ColChartComponent({ data }: ColChartComponentProps) {
  const [qtdItems, setQtdItems] = useState(10);
  const [newArr, setNewArr] = useState<CountryType[]>([]);
  const date = new Date();
  const widthScreen = useWidthScreen();

  const handleResize = useCallback(() => {
    if (widthScreen < 600) {
      setQtdItems(3);
    } else if (widthScreen < 900) {
      setQtdItems(5);
    } else if (widthScreen < 1200) {
      setQtdItems(8);
    } else {
      setQtdItems(10);
    }
  }, [widthScreen]);

  useEffect(() => {
    handleResize();
    let tempArr = data
      .sort((a, b) => b.total_medals - a.total_medals)
      .slice(0, qtdItems)
      .map((item, index) => ({
        ...item,
      }));
    setNewArr(tempArr);
  }, [widthScreen, handleResize, qtdItems, data]);

  return (
    <Card className="mx-auto w-[300px] min-[400px]:w-full">
      <CardHeader>
        <CardTitle>Comparison of medal types</CardTitle>
        <CardDescription>
          last update:{" "}
          <span className="font-bold text-green-600 dark:text-green-400">
            {date.toLocaleDateString()}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className=" " config={chartConfig}>
          <BarChart accessibilityLayer data={newArr}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (value.length > 8) return value.slice(0, 8) + "...";
                return value;
              }}
              className="font-bold"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="gold_medals" fill="hsl(var(--chart-1))" radius={4} />
            <Bar
              dataKey="silver_medals"
              fill="hsl(var(--chart-2))"
              radius={4}
            />
            <Bar
              dataKey="bronze_medals"
              fill="hsl(var(--chart-3))"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          biggest earner at the moment{" "}
          <span className="flex items-center gap-1 font-bold text-green-600 dark:text-green-400">
            {newArr[0]?.name}
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
