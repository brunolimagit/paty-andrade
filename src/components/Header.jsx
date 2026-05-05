import logoPatricia from '../assets/logo-paty.png'
import { SignIn } from "@phosphor-icons/react";

export default function Header(){
    return(
        <header className='absolute top-0 left-0 w-full z-50 flex justify-between px-10 items-center py-4'>

            {/* logo */}
            <div className='w-[120px]'>
                <img src={logoPatricia} alt="logo-patricia" />
            </div>

            {/* menu */}
            <nav className="ml-20">
                <ul className="flex gap-4 text-[#575c54] font-bold ">
                    <li className="hover:text-[#A75B46] font-raleway"><a href="/">HOME</a></li>
                    <li className="hover:text-[#A75B46]"><a href="/">SERVIÇOS</a></li>
                    <li className="hover:text-[#A75B46]"><a href="/">SOBRE</a></li>
                    <li className="hover:text-[#A75B46]"><a href="/">CONTATO</a></li>
                </ul>
            </nav>

            {/* botões */}
            <div className="">
            

                <button className="flex gap-2 bg-[#E6C6B4] text-[#A75B46] py-2 px-4 rounded-[50px] font-bold border-2 border-[#E6C6B4] hover:text-[#E6C6B4] hover:bg-[#A75B46] transition cursor-pointer">
                    Login <SignIn size={27} />
                </button>
            </div>

        </header>
    )
}