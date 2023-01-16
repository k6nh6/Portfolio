import React from "react"

export default function Project() {
    
    
        const [bgColor, setBgColor] = React.useState('gray-800');
      
        const handleClick = () => {
          setBgColor(bgColor === 'gray-800' ? 'gray-500' : 'gray-800');
        }
    
    return <>
        <div className="flex" >
            <div class="relative m-[13.5rem]">
                <div style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)" }} class= {`bg-${bgColor} bg-gray-1000 p-10 rounded-lg  text-white m-2  absolute top-0 left-0 `} onClick={handleClick}>Button 1</div>
                <div style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)" }} class= {`bg-${bgColor} bg-gray-700  p-10 rounded-lg text-white m-2 absolute top-16 left-4 `} onClick={handleClick}>Button 2</div>
                <div style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)" }} class= {`bg-${bgColor} bg-gray-600  p-10 rounded-lg text-white m-2 absolute top-32 left-8 `} onClick={handleClick}>Button 3</div>
                <div style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)" }} class= {`bg-${bgColor} bg-gray-500  p-10 rounded-lg text-white m-2 absolute top-48 left-12 `} onClick={handleClick}>Button 4</div>
            </div>
            <div className="w-full h-full p-10">
                somehing
            </div>
        </div>




    </>
}