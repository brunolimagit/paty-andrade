import logoPatricia from '../assets/logo-paty.png'

export default function Header(){
    return(
        <main className='bg-[#A75B46]'>
            <header  className='flex justify-between px-10  items-center'>

                {/*logo*/}
                <div className='w-[120px]'>
                    <img src={logoPatricia} className="" alt="logo-patricia" />
                </div>

               {/*topicos*/}
                <div  className="flex items-center">
                    <nav>
                        <ul className="flex gap-4 text-[#E6C6B4] font-bold text-xl">
                            <li className="hover:text-[#D65FE4]"><a href="/">Inicio</a></li>
                            <li><a href="/">Quem sou</a></li>
                            <li><a href="/">Trabalhos</a></li>
                            <li><a href="/">Especialidades</a></li>
                            <li><a href="/">Fed Back</a></li>
                        </ul>
                    </nav>
                </div>

                {/*login*/}
                <div className="flex gap-4">
                    
                    <button className=" text-[#E6C6B4] py-2 px-4 rounded-[50px] font-bold border-2 border-[#E6C6B4] hover:bg-[#E6C6B4] hover:text-[#A75B46] transition-colors duration-300 cursor-pointer">
                        Contado
                    </button>
                    <button className="bg-[#E6C6B4] text-[#A75B46] py-2 px-4 rounded-[50px] font-bold border-2 border-[#E6C6B4] hover:text-[#E6C6B4] hover:bg-[#A75B46] transition-colors duration-300 cursor-pointer">
                        Login
                    </button>
                </div>
            </header>
        </main>
    )
}