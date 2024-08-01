"use client";

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
    <Card className=" min-h-[80vh] sm:h-full flex flex-col mx-auto w-[300px] min-[400px]:w-full">
      <CardHeader>
        <CardTitle>Top 10 Ranking Medals</CardTitle>
        <CardDescription>Olympic Games </CardDescription>
      </CardHeader>
      <CardContent className="h-[80vh] w-full flex-1">
        <ChartContainer
          className="mx-auto min-h-[80vh] sm:h-full w-[280px] min-[450px]:w-[400px] md:w-[500px] lg:w-full"
          config={chartConfig}
        >
          <BarChart
            accessibilityLayer
            data={newArr}
            layout="vertical"
            margin={{ left: 20, right: 20, bottom: 20, top: 20 }}
            barSize={40}
            barGap={10}
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
              className="font-bold "
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
      <CardFooter className="flex-col items-start gap-2 text-lg">
        <div className="leading-none text-muted-foreground">
          2024 Olympic Games Medals
        </div>
      </CardFooter>
    </Card>
  );
}
