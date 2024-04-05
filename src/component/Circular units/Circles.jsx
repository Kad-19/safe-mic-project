import {motion} from 'framer-motion'
function Circles({title, detail}){
    return <motion.div 
    className="flex flex-wrap bg-gradient-to-r from-zinc-100 to-zinc-300 
    aspect-square sm:w-52  lg:w-72 rounded-full p-2 m-8 items-center 
    justify-center shadow-2xl " 
    whileInView={{
        scaleX:1
    }}
    transition={{
        duration:0.65
    }}
    initial={{
        scaleX:-1
    }}
    >

        <span className="text-center text-xs ">
            <h1 className="  text-xl">
                {title}
            </h1>
            <br />
            {detail}
        </span>
    
    </motion.div>
}export default Circles;