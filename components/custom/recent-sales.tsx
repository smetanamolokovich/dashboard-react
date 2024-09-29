"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

type SaleType = {
  name: string;
  email: string;
  profit: number;
  avatar?: string;
};

const sales: SaleType[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    profit: 1900,
    avatar: "01.png",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    profit: 39,
    avatar: "02.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    profit: 299,
    avatar: "03.png",
  },
  { name: "William Kim", email: "will@email.com", profit: 99, avatar: "04.png" },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    profit: 39,
    avatar: "05.png",
  },
];

function formatNumber(num: number) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const SalesRow: React.FC<{ sale: SaleType; key: string }> = ({ sale }) => (
  <div className="flex items-center">
    <Avatar className="h-9 w-9 overflow-hidden rounded-full">
      <AvatarImage src={`https://ui.shadcn.com/avatars/${sale.avatar}`} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    <div className="ml-4 space-y-1">
      <p className="text-sm font-medium leading-none">{sale.name}</p>
      <p className="text-sm text-muted-foreground">{sale.email}</p>
    </div>

    <div className="ml-auto font-medium">+${formatNumber(sale.profit)}</div>
  </div>
);

export default function RecentSales({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {sales?.length
            ? sales.map((sale) => <SalesRow sale={sale} key={sale.email} />)
            : null}
        </div>
      </CardContent>
    </Card>
  );
}
