import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FaUser } from "react-icons/fa";
import Selector from "../ThemeSelector/Selector";
import { NavLink } from "react-router-dom";
function DrawerComp(){
    return <div>
    <Drawer direction='left'>
    <DrawerTrigger>
        <FaUser/>
    </DrawerTrigger>
    <DrawerContent className={cn('')}>
    <DrawerHeader >
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
    </DrawerHeader>
<Selector/>
<NavLink
          to="/account"
          className="font-semibold px-4"
        >
          My Account
        </NavLink>
    <DrawerFooter>
        <DrawerClose>
            <Button variant="outline">Close</Button>
        </DrawerClose>
    </DrawerFooter>
    </DrawerContent>
</Drawer>
    </div>
}export default DrawerComp