export default function Navbar() {
    return (
        <>
            <nav class="navbar bg-[#7556F1]">
                {/* <nav>
                something is 
                </nav> */}
                <div class="container mx-auto flex items-center justify-between px-4 py-3">
                    <div class="flex items-center">
                        <a
                            href="Home"
                            style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)" }}
                            class="text-white 
                        no-underline 
                        font-bold font-size-100 
                        text-xl 
                        hover:text-gray-300 
                        p-1 
                        bg-[#F04DCC] 
                        mx-5 
                        text-center 
                        border-black 
                        border-4
                        rounded
                        rotate-6
                        ont-['bungee_shade']
                        "
                        >
                            Home
                        </a>
                    </div>
                    <div class="flex items-center">
                        {["Skills", "Project", "Contact"].map((item) => {
                            return (
                                <a
                                    style={{ boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1) " }}
                                    href= {`${item}`}
                                    class="text-white no-underline 
                        font-bold font-size-100 
                        text-xl 
                        hover:text-gray-300 
                        p-1 
                        bg-[#F04DCC] 
                        mx-5 
                        text-center 
                        border-black 
                        border-4 
                        rounded
                        my-1
                        "
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
            
        </>
    );
}
