

export default function Home() {
    return (
        <div className="bg-[#57f08f] flex justify-around">
            <div
                // style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)" }}
                class="text-white 
                        no-underline 
                        font-bold font-size-100 
                        text-xl 
                        bg-[#fadfae]
                        m-[30px]
                        bg-center bg-no-repeat bg-auto 
                        border-black 
                        border-4
                        rounded
                        h-[480px]
                        "
            >
                <h1 className=" bg-[#f0ac4d] mt-[.25rem] border-black border-b-[.25rem] pl-[27px] "> My Stuff</h1>

                <div className="flex flex-row m-[.5rem]">



                    <img src="/images/mant.png" alt="y" className="h-[27rem]" />


                    <div className="text-[rebeccapurple] font-[bungee] leading-[1.4rem]">
                        
                        <div className="text-[1.4rem] text-[black] ">
                            Hi, there  
                        </div> <br />
                        <p className="text-xxl leading-[1.4rem]">
                            I'm a Front end developerr.
                        </p>
                        <br />
                        <p>
                            Front end is all about designing and making everything come together for the users
                            
                        </p>
                        {/* <p >
                            First thing first is 'thinking' Second bombarding ideas on the screen to use from.
                        </p> <br />
                        <p >
                            I'm a Front end developer with hunger of full-stack developer.
                        </p>
                        <br />
                        <p>
                            Front end is all about designing and making everything come together for the users
                        </p> */}
                    </div>





                </div>

            </div>
            
            <div
                // style={{ boxShadow: "-7px 7px 0px rgba(255, 255, 255, 1) " }}
                class="text-white 
                m-[172px_auto]
                        no-underline 
                        font-bold font-size-100 
                        text-xl 
                        bg-[#fadfae]
                        
                        bg-center bg-no-repeat bg-auto 
                        border-black 
                        border-4
                        rounded
                        h-[480px]
                        "
            >
                
<div className="h-[480px] relative">
    <img src="/images/bp.jpg" alt="" className="w-[100%] h-[470px] p-[2px]"/>
<div className="top-0 absolute left-0 text-[white] ">
                        <img src="images/logo.png" alt=""  className=""/>
</div>
</div>
               

            </div>


        </div>
    )
}