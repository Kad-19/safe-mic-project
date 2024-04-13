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
function DrawerComp(){
    return <Drawer direction='left'>
    <DrawerTrigger>Open</DrawerTrigger>
    <DrawerContent className={cn('w-4/6')}>
    <DrawerHeader >
        <DrawerTitle>Welcome to our chatbot</DrawerTitle>
        <DrawerDescription>Your conversation is private</DrawerDescription>
    </DrawerHeader>

    <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose>
            <Button variant="outline">Cancel</Button>
        </DrawerClose>
    </DrawerFooter>
    </DrawerContent>
</Drawer>

}export default DrawerComp