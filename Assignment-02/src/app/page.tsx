export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-8 pb-8 space-y-10 -mt-20 w-[990px] m-auto">

      {/* Main Content */}

        ``
        
      <div className="main-content flex flex-col text-center items-center w-[550px] p-12 space-y-4">
        <h5 className="text-white text-[16px] leading-[24px] tracking-[0.1px] font-montserrat mt-24">
          Welcome
        </h5>
        <h1 className="text-white text-[58px] font-montserrat tracking-[0.2px] leading-[80px]  pt-3 ">
          Selling on the internet like a pro
        </h1>
        <h4 className="text-white text-[20px] font-montserrat leading-[30px] tracking-[0.2px] pt-3 ">
          We know how large objects will act, but things on a small scale just do not act that way.
        </h4>

        {/* Button Div */}
        <div className="flex space-x-2 pt-4">
          <button className="rounded-[5px] px-[25px] py-2 bg-[#23A6F0] text-white text-[14px] font-montserrat leading-[22px] tracking-[0.2px] ">
            Get Quote Now
          </button>
          <button className="rounded-[5px] px-[25px] py-2 border border-[#23A6F0] text-white text-[14px] font-montserrat leading-[22px] tracking-[0.2px] ">
            Learn More
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 w-full  mt-8">

  {/* Cards 1 */}
  <div className="card bg-[#FFFFFF] rounded w-80 h-72 pt-8 px-12">
    <div className="flex flex-col items-start">
      <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-lg mb-4 "></div>
      <h5 className="text-[#252B42] text-[16px] font-montserrat leading-[24px] tracking-[0.1px] ">
        Training Courses
      </h5>
      <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
      <p className="text-[#737373] text-[14px] font-montserrat leading-[20px] tracking-[0.2px] pt-5 ">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card bg-[#FFFFFF] p-4 rounded w-80 h-72 pt-8 px-12">
    <div className="flex flex-col items-start">
      <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-lg mb-4"></div>
      <h5 className="text-[#252B42] text-[16px] font-montserrat leading-[24px] tracking-[0.1px] ">
        2,769 online courses
      </h5>
      <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
      <p className="text-[#737373] text-[14px] font-montserrat leading-[20px] tracking-[0.2px] pt-5 ">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card bg-[#23A6F0] p-4 rounded w-80 h-72 pt-8 px-12 ">
    <div className="flex flex-col items-start">
      <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded-lg"></div>
      <h5 className="text-[#FFFFFF] text-[16px] font-montserrat leading-[24px] tracking-[0.1px] pt-4 ">
        Training Courses
      </h5>
      <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-4 "></div>
      <p className="text-[#FFFFFF] text-[14px] font-montserrat leading-[20px] tracking-[0.2px] pt-5 ">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>
  </div>
</div>
</div>
);
}
