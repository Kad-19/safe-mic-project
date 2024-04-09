import {motion} from 'framer-motion'
function Circles({title, detail}){
    return <motion.div 
    className="flex flex-wrap bg-gradient-to-r from-zinc-100 to-zinc-300 
    aspect-square sm:w-52  lg:w-72 rounded-full p-2 m-8 items-center 
    justify-center shadow-md " 
    whileInView={{
        scaleX:[0,0.65,0.8,1],
        opacity:1
    }}
    transition={{
        duration:1
    }}
    initial={{
        scaleX:-1,
        opacity:0
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