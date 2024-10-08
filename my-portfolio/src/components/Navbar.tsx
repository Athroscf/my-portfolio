import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">ShadncnUI Next</a>
          </NavigationMenuItem>

          {/* mobile */}
          {/* <span className="flex md:hidden">
            
          </span> */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
