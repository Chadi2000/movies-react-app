

const Footer = () => {
  return (
    <div className='flex flex-col py-[20px] md:py-[40px] gap-[20px] justify-center items-center mt-[60px] bg-black text-white'>
       <ul className=" flex flex-col md:flex-row gap-2 md:gap-[80px] list-none pb-3 font-semibold">
        <li className="cursor-pointer">Download App</li>
        <li className="cursor-pointer">Terms of service</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">SiteMap</li>
       </ul>
       <p className="text-center w-full text-[13px] md:text-[16px] md:max-w-[1000px]">A_Movie is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from HDToday and watch it later if you want.</p>
       
    </div>
  )
}

export default Footer
