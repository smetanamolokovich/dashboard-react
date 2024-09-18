import CreditCardIcon from "@/components/icons/credit-card";
import DollarIcon from "@/components/icons/dollar";
import HeartBeatIcon from "@/components/icons/heart-beat";
import UsersIcon from "@/components/icons/users";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardCard from "@/components/ui/dashboard-card";
import { DatePicker } from "@/components/ui/date-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

        <div className="flex items-center space-x-2">
          <DatePicker />
          <Button>Download</Button>
        </div>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent
            className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
            value="overview"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Total Revenue"
                icon={<DollarIcon />}
                text="$45,231.89"
                description="+20.1% from last month"
              />
              <DashboardCard
                title="Subscriptions"
                icon={<UsersIcon />}
                text="+2350"
                description="+180.1% from last month"
              />
              <DashboardCard
                title="Sales"
                icon={<CreditCardIcon />}
                text="+12,234"
                description="+19% from last month"
              />
              <DashboardCard
                title="Active Now"
                icon={<HeartBeatIcon />}
                text="+573"
                description="+201 since last hour"
              />
            </div>
          </TabsContent>
          <TabsContent value="analytics">analytics</TabsContent>
          <TabsContent value="reports">reports</TabsContent>
          <TabsContent value="notifications">notifications</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
