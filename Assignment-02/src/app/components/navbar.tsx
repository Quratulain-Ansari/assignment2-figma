import Link from "next/link";

export default function Navbar() {
  return (
    <div className= "flex items-center justify-center w-full">

      {/* Navbar */}
    <nav className="navbar-style2 h-[91px] mx-[35px] flex items-center w-[990px] gap-[15%]">

      {/* Brand Name */}
      <h3 className="text-white font-bold text-[24px] font-montserrat leading-[32px] tracking-[0.1px] ">BrandName</h3>
    
     {/* Navbar Links */}
      <div className=" flex justify-between grow "> 
        <div className="flex space-x-[21px]  justify-between items-center">
          <Link href="/" className="text-white text-[14px] font-montserrat leading-[24px] tracking-[0.2px] ">Home</Link>
          <Link href="/product" className="text-white text-[14px] font-montserrat leading-[24px] tracking-[0.2px] ">Product</Link>
          <Link href="/pricing" className="text-white text-[14px] font-montserrat leading-[24px] tracking-[0.2px] ">Pricing</Link>
          <Link href="/contact" className="text-white text-[14px] font-montserrat leading-[24px] tracking-[0.2px] ">Contact</Link>
        </div>

        {/* Login and Join Us Buttons */}
        <div className="   flex space-x-[45px]">
          <button className=" text-white text-[14px] font-montserrat leading-[22px] tracking-[0.2px] text-right px-4 py-2 ">Login</button>
          <button className=" rounded-[5px] px-[25px] py-[13px] bg-[#23A6F0] text-white text-[14px] font-montserrat leading-[22px] tracking-[0.2px] text-right ">JOIN US</button>
        </div>
      </div>
    </nav>
    </div>
  );
}
