"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  icon?: React.ReactElement;
  text: string;
  description: string;
}

export default function DashboardCard({
  title,
  icon,
  text,
  description,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="tracking-tight text-sm font-medium">
            {title}
          </CardTitle>
          {icon ? icon : ''}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{text}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
