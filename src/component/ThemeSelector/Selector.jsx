import { Popover,PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {motion} from 'framer-motion'
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { themeContext } from "@/App";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
function Selector(){
    const {changeTheme,darkThemeSwitch,theme}=useContext(themeContext)
    return <Popover >
        <PopoverTrigger  asChild>
    <NavLink>
        Theme
    </NavLink>
        </PopoverTrigger>
        <PopoverContent className={cn('block w-fit')} side={'bottom'}>
            <motion.div className="my-1 w-12 aspect-square bg-[#3B82F6] rounded-full"
            whileTap={{
                scale:0.7
            }}
            whileHover={{
                scale:1.1
            }}
            onClick={()=>changeTheme(0)}
            >
            </motion.div>
            <motion.div className="my-1 w-12 aspect-square bg-[#E11D48] rounded-full"
            whileTap={{
                scale:0.7
            }}
            whileHover={{
                scale:1.1
            }}
            onClick={()=>changeTheme(1)}
            >
            </motion.div>
            <motion.div className="my-1 w-12 aspect-square bg-[#6D28D9] rounded-full"
            whileTap={{
                scale:0.7
            }}
            whileHover={{
                scale:1.1
            }}
            onClick={()=>changeTheme(2)}
            >
            </motion.div>
            <motion.div className="my-1 w-12 aspect-square bg-[#0F172A] border border-white rounded-full"
            whileTap={{
                scale:0.7
            }}
            whileHover={{
                scale:1.1
            }}
            onClick={()=>changeTheme(3)}
            >
            </motion.div>
            <button onClick={darkThemeSwitch}>
                {theme.dark?<CiLight className="aspect-square w-12"/>:<CiDark className="aspect-square w-12"/>}
            </button>
        </PopoverContent>
    </Popover>
}export default Selector;