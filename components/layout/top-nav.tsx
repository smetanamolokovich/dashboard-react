import { Combobox } from "../ui/combobox";

export default function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Combobox />
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <a className="text-sm font-medium transition-colors hover:text-primary">
            Overview
          </a>
          <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Customers
          </a>
          <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Products
          </a>
          <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Settings
          </a>
        </nav>
      </div>
    </div>
  );
}
