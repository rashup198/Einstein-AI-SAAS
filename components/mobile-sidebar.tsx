"use client";
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useState ,useEffect} from "react";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(true);

    },[]);
    if(!isOpen){
        return null;
    }

  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"} size={"icon"} className="md:hidden">
                    <Menu></Menu>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0" >
                <Sidebar></Sidebar>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSidebar
