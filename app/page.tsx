import DashboardChart from "@/components/custom/dashboard-chart";
import RecentSales from "@/components/custom/recent-sales";
import { Button } from "@/components/ui/button";
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
          <Button>Stáhnout</Button>
        </div>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Přehled</TabsTrigger>
            <TabsTrigger value="analytics">Analytiky</TabsTrigger>
            <TabsTrigger value="reports">Reporty</TabsTrigger>
            <TabsTrigger value="notifications">Upozornění</TabsTrigger>
          </TabsList>

          <TabsContent
            className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
            value="overview"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Celkem vozidel"
                text="250"
                description="+20 oproti minulému měsíci"
              />
              <DashboardCard
                title="Celkem reporty"
                text="+250"
                description="+80 oproti minulému měsíci"
              />
              <DashboardCard
                title="Nových zákazníků"
                text="+20"
                description="+9 oproti minulému měsíci"
              />
              <DashboardCard
                title="Kolik aut se dnes udělalo?"
                text="+10"
                description="+2 od poslední hodiny"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <DashboardChart className="col-span-4" />
              <RecentSales className="col-span-3" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
