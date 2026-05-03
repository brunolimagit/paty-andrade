import logoPatricia from '../assets/logo-patricia.png'

export default function Header(){
    return(
        <main>
            <header  className='flex justify-between px-10'>

                {/*logo*/}
                <div className=' w-[120px]'>
                    <img src={logoPatricia} className="" alt="logo-patricia" />
                </div>

               {/*topicos*/}
                <div  className="flex items-center">
                    <nav>
                        <ul className="flex gap-4 text-[pink] font-bold">
                            <li className="hover:text-black"><a href="/">Inicio</a></li>
                            <li><a href="/">Quem sou</a></li>
                            <li><a href="/">Trabalhos</a></li>
                            <li><a href="/">Especialidades</a></li>
                            <li><a href="/">Fed Back</a></li>
                        </ul>
                    </nav>
                </div>

                {/*login*/}
                <div className="w-[120px]">
                    <img src={logoPatricia} className="" alt="logo-patricia" />
                </div>
            </header>
        </main>
    )
}