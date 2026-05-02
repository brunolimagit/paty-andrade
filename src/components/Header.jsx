import logoPatricia from '../assets/logo-patricia.png'

export default function Header(){
    return(
        <main className='bg-black'>
            <header>

                {/*logo*/}
                <div className=' w-[400px]'>
                    <img src={logoPatricia} className="" alt="logo-patricia" />
                </div>

               {/*topicos*/}
                <div></div>

                {/*login*/}
                <div></div>
            </header>
        </main>
    )
}