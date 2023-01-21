import React, { useState, useEffect } from "react";
import { AnimatePresence, easeIn, motion, useAnimation } from 'framer-motion';


const LocalData = [
  {
    h2: "Eddy Ball",
    p: "loremip usesdf dssdfasdfasdfadf adfasdf adf adf adf asdf asdf asdf asd ff ",
    button: "Explore",
    img: "images/eddy_ball_banner.png"
  },
  {
    h2: "Pixel Ball",
    p: "loremdsfsdfdf ds adf fdf dfd ffff adf adf adf adf adfadfa  f ",
    button: "Explore",
    img: "images/Pixel_blast_banner.png"
  },
  {
    h2: "Sale Rush Ball",
    p: "loremsdfsdfs fad faffff fsfs f f f f ff df dsf ",
    button: "Explore",
    img: "images/sale_rush_banner.png"
  },
  {
    h2: "Traffic Jam",
    p: "loremipssf dsf ",
    button: "Explore",
    img: "images/traffic_jam_banner.png"
  }
]
export default function Contact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeData = () => {
    setCurrentIndex((currentIndex + 1) % LocalData.length);
  };

  useEffect(() => {
    const interval = setInterval(changeData, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);


 


  

  return <>
    <section className="flex bg-[#0b0024] px-10 text-6xl font-bold text-[white] overflow-hidden">
      <AnimatePresence mode="wait">
        <div key={currentIndex} className="flex  text-6xl font-bold text-[white]">

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0}}
            transition={{type:'spring',stiffness:200, damping:12,delay:.1}}
            class="w-1/2  flex flex-col justify-center my-[100px]">
            <h2>{LocalData[currentIndex].h2}</h2>
            <p className="text-lg my-10"> {LocalData[currentIndex].p}</p>
            <button
              

              className="w-[200px] 
        rounded-lg 
        px-8 
        py-2 
        text-xl
        border-2 
        border-blue-500 
        text-blue-500 
        hover:bg-blue-500
        hover:text-blue-100 
        duration-300">
              {LocalData[currentIndex].button}
            </button>
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0, rotateY:20 }}
            transition={{type:'spring',stiffness:300, damping:15, duration:1}}
            

            class="w-1/2 flex justify-center">
            <img src={LocalData[currentIndex].img} className="w-[80%] object-cover" alt="" />
          </motion.div>
        </div>

      </AnimatePresence>
    </section>


  </>
}