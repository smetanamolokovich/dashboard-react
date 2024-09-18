import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

        <div className="flex items-center space-x-2">
          <DatePicker />
          <Button>Download</Button>
        </div>
      </div>
    </div>
  );
}
