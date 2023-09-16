"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {usePathname} from "next/navigation";
import { LayoutDashboard,
  MessageSquare,
   ImageIcon ,
   VideoIcon, 
   MusicIcon,
   Code,
    Settings
  } from "lucide-react";

const montserrat = Montserrat({weight: "600", subsets:["latin"]})

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color :"text-sky-500"
  },
  {
    label: "Conversion",
    icon: MessageSquare,
    href: "/conversion",
    color :"text-violet-700"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color :"text-pink-700"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color :"text-orange-700"
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color :"text-emerald-500"
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color :"text-red-500"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]
const Sidebar = () => {

  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1 ">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4 ">
                    <Image 
                    fill
                    alt="logo"
                    src={logo}
                    ></Image>
                </div>
                <h1 className={cn (" text-2xl font-bold",montserrat.className)}>
                  Einstine
                </h1>
            </Link>
            <div className="space-y-1 ">
              {routes.map((route) => (
               <Link 
               href={route.href} 
               key={route.href}
               className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg hover:bg-gray-600 transition",pathname === route.href ? "bg-gray-600" : "text-gray-400 hover:text-white")}
               >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("w-6 h-6 mr-4",route.color)}></route.icon>
                  <span className={cn("text-lg ",route.color)}>{route.label}</span>
                </div>
               </Link> 
              ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
