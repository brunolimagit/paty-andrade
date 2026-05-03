import logoPatricia from '../assets/logo-patricia.png'

export default function Header(){
    return(
        <main className='bg-[#FFE2CE]'>
            <header  className='flex justify-between px-10 items-center'>

                {/*logo*/}
                <div className='w-[100px]'>
                    <img src={logoPatricia} className="" alt="logo-patricia" />
                </div>

               {/*topicos*/}
                <div  className="flex items-center">
                    <nav>
                        <ul className="flex gap-4 text-[#D65FE4] font-bold text-xl">
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
                    
                    <button className="bg-[#DC96E4] text-white py-2 px-4 rounded-[50px] font-bold">
                        Contado
                    </button>
                    <button className="bg-[#DC96E4] text-white py-2 px-4 rounded-[50px] font-bold">
                        Login
                    </button>
                </div>
            </header>
        </main>
    )
}