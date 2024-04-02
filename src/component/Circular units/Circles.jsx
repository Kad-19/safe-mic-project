function Circles({title, detail}){
    return <div className="flex flex-wrap bg-gradient-to-r from-zinc-100 to-zinc-300 aspect-square sm:w-52  lg:w-72 rounded-full p-2 m-8 items-center justify-center shadow-2xl hover:-scale-x-100 delay-500 duration-1000" >

        <span className="text-center text-xs hover:-scale-x-100 delay-500 duration-1000">
            <h1 className="  text-xl">
                {title}
            </h1>
            <br />
            {detail}
        </span>
    
    </div>
}export default Circles;