"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", revenue: 5000 },
  { month: "February", revenue: 1500 },
  { month: "March", revenue: 4500 },
  { month: "April", revenue: 2000 },
  { month: "May", revenue: 5500 },
  { month: "June", revenue: 2500 },
  { month: "July", revenue: 4000 },
  { month: "August", revenue: 4500 },
  { month: "September", revenue: 3500 },
  { month: "October", revenue: 3000 },
  { month: "November", revenue: 3500 },
  { month: "December", revenue: 4500 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#fafafa",
  },
} satisfies ChartConfig;

interface DashboardChartProps {
  className?: string
}

export default function DashboardChart({ className }: DashboardChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="revenue"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
