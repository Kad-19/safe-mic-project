import React from "react";
function Message({sender,text}){
    const defaultStyle="w-7/12 mt-2 min-h-8 p-4 text-white rounded-lg"
    const type=sender?" bg-blue-600 float-right":" bg-zinc-600 float-left";
    return <div className={defaultStyle+type}>
        {text}
    </div>
}export default Message;