import  imgMain from "../assets/img-section-main.png";

export default function HomePrincipal(){
return(
    <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
         <img src={imgMain} className="" alt="patricia" />
             <h1 className="text-[60px] font-raleway text-white animate-fadeUp z-10 absolute top-[30%] left-[55%]">
        Bem-vindo(a)
             </h1>
           
            <p className="text-white text-[25px] animate-fadeUp z-10 absolute top-[30%] left-[54%] mt-22">Apaixonada Pela Arte De Embelezar</p>
               <button className="text-[#E6C6B4] text-[20px] py-2 px-10 rounded-[50px] animate-fadeUp z-10 absolute top-[30%] left-[62%] mt-40 font-bold border-2 border-[#E6C6B4] hover:bg-[#E6C6B4] hover:text-[#A75B46] transition cursor-pointer">
                    Contato
                </button>
        <main>

          

            
        </main>
    </section>
)
}    
