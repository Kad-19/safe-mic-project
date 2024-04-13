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
function DrawerComp(){
    return <div>
    <Drawer direction='left'>
    <DrawerTrigger>
        <FaUser/>
    </DrawerTrigger>
    <DrawerContent className={cn('')}>
    <DrawerHeader >
        <DrawerTitle>User Settings</DrawerTitle>
        <DrawerDescription>Customize the site to your liking</DrawerDescription>
    </DrawerHeader>
<Selector/>
    <DrawerFooter>
        <DrawerClose>
            <Button variant="outline">Close</Button>
        </DrawerClose>
    </DrawerFooter>
    </DrawerContent>
</Drawer>
    </div>
}export default DrawerComp