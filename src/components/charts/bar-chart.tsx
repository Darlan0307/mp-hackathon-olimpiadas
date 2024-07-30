"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

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

const chartConfig = {
  total_medals: {
    label: "Total Medals",
  },
} satisfies ChartConfig;

type BarChartComponentProps = {
  data: CountryType[];
};

const colors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function BarChartComponent({ data }: BarChartComponentProps) {
  const newArr = data
    .sort((a, b) => b.total_medals - a.total_medals)
    .slice(0, 10)
    .map((item, index) => ({
      ...item,
      fill: colors[index % colors.length],
    }));
  return (
    <Card className=" mx-auto w-[300px] min-[450px]:w-[400px] md:w-full">
      <CardHeader>
        <CardTitle>Bar Chart - Top 10 Medals</CardTitle>
        <CardDescription>Olympic Games Medals</CardDescription>
      </CardHeader>
      <CardContent className="h-[80vh] w-full">
        <ChartContainer className="h-full w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={newArr}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (value.length > 8) return value.slice(0, 8) + "...";
                return value;
              }}
              className="font-bold"
            />
            <XAxis dataKey="total_medals" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="total_medals"
              layout="vertical"
              radius={5}
              fill="#007AFF"
            >
              {newArr.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          2024 Olympic Games Medals
        </div>
      </CardFooter>
    </Card>
  );
}
