"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { SidebarItem } from "./ui/SidebarItem";
import { Library } from "./ui/Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <HomeIcon width={24} height={24} />,
        href: "/",
        isActive: pathname === "/",
        label: "Home",
      },
      {
        icon: <MagnifyingGlassIcon width={24} height={24} />,
        href: "/search",
        isActive: pathname === "/search",
        label: "Search",
      },
    ],
    [pathname]
  );
  return (
    <div className={styles.block}>
      <div className={styles.sidebar}>
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            href={route.href}
            isActive={route.isActive}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </div>
      <Library />
    </div>
  );
};

export default Sidebar;
