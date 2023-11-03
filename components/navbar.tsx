import Image from "next/image";

const navbar = () => {
  return (
    <div className="w-full -mt-52 flex justify-between items-center">
      <div className="relative flex items-center justify-center ml-14 ">
        <div className="absolute -left-[68px] ">
          <Image
            src="/binance_logo.png"
            width={120}
            height={120}
            alt="Binance image"
          />
        </div>
        <div className="flex items-center justify-center bg-[#ffffff] px-5 py-3 pl-[40px] rounded-full">
          <div className="mr-[10px] font-extrabold text-[#29005c] text-2xl">
            BNBUSD
          </div>
          <div className="text-[#29005c] font-medium">$228.5332</div>
        </div>
      </div>
      <div className="hidden justify-between items-center px-[30px]  nav_cards:flex">
        <div className="relative left-[137px]">
          <Image src="nav_card.svg" width={140} height={140} alt="nav_cards" />
        </div>
        <div className="w-full">
          <div className="bg-white  rounded-full gap-14 flex justify-between items-center py-1 px-1">
            <button>
              <Image
                src="nav_arrow_left.svg"
                width={35}
                height={35}
                alt="arrow"
              />
            </button>
            <button>
              <Image
                src="nav_arrow_right.svg"
                width={35}
                height={35}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[600px]">
        <div className="flex p-5 items-center">
          <div className="relative">
            <div className="bg-white rounded-full flex justify-center items-center px-3 py-2 pr-[65px] gap-2 mr-10">
              <div className="text-3xl text-[#7836d3] font-bold">00:38</div>
              <div className="font-medium">5m</div>
            </div>
            {/* right-7 top-[341px] */}
            <div className="absolute  right-[10px] -top-[21px]">
              <Image src="clock.svg" width={90} height={90} alt="clock" />
            </div>
          </div>
          <div className="flex gap-[7px] mr-[50px] items-center justify-center">
            <div className="bg-[#7b6ba7] rounded-2xl w-[50px] h-[50px] flex items-center justify-center"> 
              <Image src="question.svg" width={24} height={24} alt="ques" className="py-3 items-center justify-center" />
            </div>
            <div className="bg-[#7b6ba7] rounded-2xl w-[50px] h-[50px] flex items-center justify-center">
              <Image src="trophy.svg" width={24} height={24} alt="ques" className="py-3 items-center justify-center" />
            </div>
            <div className="bg-[#e9eaeb] rounded-2xl w-[50px] h-[50px] flex items-center justify-center">
              <Image src="refresh.svg" width={24} height={24} alt="ques" className="py-3 items-center justify-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
