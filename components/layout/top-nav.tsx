import { Combobox } from "../ui/combobox";
import { Input } from "../ui/input";
import NavLinks from "../ui/nav-links";
import { ProfileDropdownMenu } from "../ui/profile-dropdown-menu";

export default function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Combobox />

        <NavLinks />

        <div className="ml-auto flex items-center space-x-4">
          <Input className="w-full md:w-[100px] lg:w-[300px]" type="text" placeholder="Search..." />
          <ProfileDropdownMenu />
        </div>
      </div>
    </div>
  );
}
