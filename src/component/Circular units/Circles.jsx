function Circles({title, detail}){
    return <div className="flex flex-wrap bg-zinc-300 w-52 h-52 rounded-full p-2 m-8 items-center justify-center hover:scale-110 duration-1000">

        <p className="text-center text-xs">
            <h1 className="  text-xl">
                {title}
            </h1>
            <br />
            {detail}
        </p>
    
    </div>
}export default Circles;