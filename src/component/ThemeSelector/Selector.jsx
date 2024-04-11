import { Popover,PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {motion} from 'framer-motion'
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { themeContext } from "@/App";
function Selector(){
    const {changeTheme}=useContext(themeContext)
    return <Popover >
        <PopoverTrigger asChild>
            <Button className={cn(' rounded-full ')} >
                Theme
            </Button>
        </PopoverTrigger>
        <PopoverContent className={cn('flex')} side={'right'}>
            <motion.div className="mx-2 w-12 aspect-square bg-[#3B82F6] rounded-full"
            whileTap={{
                scale:0.7
            }}
            onClick={()=>changeTheme(0)}
            >
            </motion.div>
            <motion.div className="mx-2 w-12 aspect-square bg-[#E11D48] rounded-full"
            whileTap={{
                scale:0.7
            }}
            onClick={()=>changeTheme(1)}
            >
            </motion.div>
            <motion.div className="mx-2 w-12 aspect-square bg-[#6D28D9] rounded-full"
            whileTap={{
                scale:0.7
            }}
            onClick={()=>changeTheme(2)}
            >
            </motion.div>
            <motion.div className="mx-2 w-12 aspect-square bg-[#0F172A] rounded-full"
            whileTap={{
                scale:0.7
            }}
            onClick={()=>changeTheme(3)}
            >
            </motion.div>
        </PopoverContent>
    </Popover>
}export default Selector;