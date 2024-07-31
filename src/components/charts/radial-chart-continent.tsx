"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ContinentType } from "@/utils/count-continent";
import CustomizedLabel from "../customized-label";

const chartConfig = {
  ASI: {
    label: "Asia",
    color: "hsl(var(--chart-1))",
  },
  OCE: {
    label: "Oceania",
    color: "hsl(var(--chart-2))",
  },
  EUR: {
    label: "Europe",
    color: "hsl(var(--chart-3))",
  },
  AFR: {
    label: "Africa",
    color: "hsl(var(--chart-4))",
  },
  AME: {
    label: "America",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface RadialChartComponentProps {
  data: ContinentType[];
}

export function RadialChartContinentComponent({
  data,
}: RadialChartComponentProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[180px]"
    >
      <RadialBarChart
        data={data}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-xl font-bold"
                    >
                      Continents
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="ASI"
          stackId="a"
          cornerRadius={5}
          fill="hsl(var(--chart-1))"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="EUR"
          stackId="a"
          cornerRadius={5}
          fill="hsl(var(--chart-2))"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="AFR"
          stackId="a"
          cornerRadius={5}
          fill="hsl(var(--chart-3))"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="AME"
          stackId="a"
          cornerRadius={5}
          fill="hsl(var(--chart-4))"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="OCE"
          stackId="a"
          cornerRadius={5}
          fill="hsl(var(--chart-5))"
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
