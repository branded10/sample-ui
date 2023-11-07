"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface CardProps {
  icon?: any;
  liveText?: string;
  txtColor?: string;
  borderColor?: string;
  innerBorderColor?: string;
  cardNumber?: string;
  lastPrice?: string;
  priceChange?: string;
  lockedPrice?: string;
  prizePool?: string;
  opacityClass?: string;
  pay1?: string;
  pay2?: string;
  isOpaque?: boolean;
  isFourth?: boolean;
  isFifth?: boolean;
  isThird?: boolean;
  handleFlip?: () => void;
}

interface FlipCardProps extends CardProps {
  card: CardProps;
  icon: any;
  isOpaque: boolean;
  isFourth: boolean;
  isFifth: boolean;
  isThird: boolean;
}

const FrontCard = ({
  pay1,
  pay2,
  liveText,
  txtColor,
  borderColor,
  innerBorderColor,
  cardNumber,
  prizePool,
  isFourth,
  isOpaque,
  icon,
  handleFlip,
}: CardProps) => {
  return (
    <div
      className={`w-[320px]  bg-white rounded-[30px] border-[2px] border-b-[5px] ${
        isOpaque && "opacity-50"
      }`}
      style={{ borderColor: borderColor }}
    >
      <div
        className={`flex justify-between items-center px-4 py-2 ${
          isFourth && "bg-[#7645D9]"
        }  rounded-t-[30px] overflow-hidden `}
      >
        <div className="flex items-center">
          <div>
            <Image src={icon} width={20} height={20} alt="play" />
          </div>
          <div
            className={`ml-1 font-extrabold text-sm`}
            style={{ color: txtColor }}
          >
            {liveText}
          </div>
        </div>

        <div className={`text-[#7836db] font-medium`}>{cardNumber}</div>
      </div>
      {/* bg-[#e9e6ef] h-2.5 dark:bg-[#e9e6ef] */}

      <div className={`flex flex-col justify-center items-center mt-4`}>
        <div className={`-mb-[2px]`}>
          <Image src="card_up_white.svg" width={250} height={380} alt="image" />
        </div>

        {/* middle part of the card */}
        <div
          className={`flex flex-col p-4 rounded-2xl border-[2.5px] w-[285px] ${
            isFourth ? "h-[171px]" : ""
          } bg-white`}
          style={{ borderColor: innerBorderColor }}
        >
          {!isFourth && (
            <div className={`font-extrabold text-xs text-[#7b6ba7] mb-[8px]`}>
              LAST PRICE
            </div>
          )}

          <div className="flex justify-between items-center font-extrabold text-md text-[#280D5F]">
            <div>Prize Pool:</div>
            <div>8.5143 BNB</div>
          </div>

          {/* {isFourth && (
              <div className="text-white font-extrabold flex flex-col justify-center items-center mt-4 gap-1">
                <div className="bg-[#31D0AA] p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md">
                  Enter UP
                  </div>
                <div className="bg-[#ED4B9E] p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md">
                  Enter Down
                  </div>
                  </div>
                )} */}

          <div className="text-white font-extrabold flex flex-col justify-center items-center mt-4 gap-[5px]">
            <div
              className="relative active:top-[3px] bg-[#31D0AA] cursor-pointer hover:opacity-50 active:shadow-none p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md"
              onClick={handleFlip}
            >
              Enter UP
            </div>
            <div
              className="relative bg-[#ED4B9E] active:top-[3px] cursor-pointer hover:opacity-50 active:shadow-none p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md"
              onClick={handleFlip}
            >
              Enter Down
            </div>
          </div>
        </div>

        <div className={`-mt-[2px]`}>
          <Image
            src="card_down_pink.svg"
            width={250}
            height={380}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

const BackCard = ({
  pay1,
  pay2,
  liveText,
  txtColor,
  borderColor,
  innerBorderColor,
  cardNumber,
  prizePool,
  isFourth,
  isOpaque,
  icon,
  handleFlip,
}: CardProps) => {
  return (
    <div
      className={`w-[320px]  bg-white rounded-[30px] border-[2px] border-b-[5px] ${
        isOpaque && "opacity-50"
      }`}
      style={{ borderColor: borderColor }}
    >
      <div
        className={`flex justify-between items-center px-4 py-2 ${
          isFourth && "bg-[#7645D9]"
        }  rounded-t-[30px] overflow-hidden `}
      >
        {/* <div className="flex items-center">
          <div>
            <Image src={icon} width={20} height={20} alt="play" />
          </div>
          <div
            className={`ml-1 font-extrabold text-sm`}
            style={{ color: txtColor }}
          >
            {liveText}
          </div>
        </div> */}

        <div className={`text-[#7836db] font-medium`}>{cardNumber}</div>
      </div>
      {/* bg-[#e9e6ef] h-2.5 dark:bg-[#e9e6ef] */}

      <div className={`flex flex-col justify-center items-center mt-4`}>
        <div className={`-mb-[2px]`}>
          <Image src="card_up_white.svg" width={250} height={380} alt="image" />
        </div>

        {/* middle part of the card */}
        <div
          className={`flex flex-col p-4 rounded-2xl border-[2.5px] w-[285px] ${
            isFourth ? "h-[171px]" : ""
          } bg-white`}
          style={{ borderColor: innerBorderColor }}
        >
          {!isFourth && (
            <div className={`font-extrabold text-xs text-[#7b6ba7] mb-[8px]`}>
              LAST PRICE
            </div>
          )}

          <div className="flex justify-between items-center font-extrabold text-md text-[#280D5F]">
            <div>Prize Pool:</div>
            <div>8.5143 BNB</div>
          </div>

          <div className="text-white font-extrabold flex flex-col justify-center items-center mt-4 gap-[5px]">
            <div
              className="relative active:top-[3px] bg-[#31D0AA] cursor-pointer hover:opacity-50 active:shadow-none p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md"
              onClick={handleFlip}
            >
              Enter UP
            </div>
            <div
              className="relative bg-[#ED4B9E] active:top-[3px] cursor-pointer hover:opacity-50 active:shadow-none p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md"
              onClick={handleFlip}
            >
              Enter Down
            </div>
          </div>
        </div>

        <div className={`-mt-[2px]`}>
          <Image
            src="card_down_pink.svg"
            width={250}
            height={380}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ card, icon, isOpaque, isFourth }: FlipCardProps) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="container">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
              {FrontCard({ ...card, icon, isFourth, isOpaque, handleFlip })}
            </div>
            {/* <button className="flip-button" onClick={handleFlip}>
              Flip
            </button> */}
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              {BackCard({ ...card, icon, isFourth, isOpaque, handleFlip })}
            </div>
            {/* <button className="flip-button" onClick={handleFlip}>
              Flip
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  liveText,
  txtColor,
  borderColor,
  innerBorderColor,
  cardNumber,
  lastPrice,
  priceChange,
  lockedPrice,
  prizePool,
  opacityClass,
  icon,
  pay1,
  pay2,
  isOpaque,
  isFourth,
  isFifth,
  isThird,
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`w-[320px] ${isFifth ? "h-[305px] mt-10" : "h-[372px]"} ${
        isThird ? "h-[372px]" : ""
      } bg-white rounded-[30px] border-[2px] border-b-[5px] ${
        isOpaque && "opacity-50"
      }`}
      style={{ borderColor: borderColor }}
    >
      <div
        className={`flex justify-between items-center px-4 py-2 ${
          isFourth && "bg-[#7645D9]"
        } ${isFifth && "bg-[#E7E3EB]"} rounded-t-[30px] overflow-hidden `}
      >
        <div className="flex items-center">
          <div>
            <Image src={icon} width={20} height={20} alt="play" />
          </div>
          <div
            className={`ml-1 font-extrabold text-sm`}
            style={{ color: txtColor }}
          >
            {liveText}
          </div>
        </div>

        <div className={`text-[#7836db] font-medium`}>{cardNumber}</div>
      </div>
      {/* bg-[#e9e6ef] h-2.5 dark:bg-[#e9e6ef] */}
      {isThird && (
        <div className={`w-full bg-[#e9e6ef] h-2.5 dark:bg-[#e9e6ef]`}>
          <div className={`bg-[#7836d3] h-2.5`} style={{ width: "45%" }}></div>
        </div>
      )}

      <div className={`flex flex-col justify-center items-center mt-4`}>
        {!isFifth && (
          <div className={`-mb-[2px]`}>
            <Image
              src="card_up_white.svg"
              width={250}
              height={380}
              alt="image"
            />
          </div>
        )}
        {isFifth && (
          <div className={`-mb-[2px]`}>
            <Image
              src="card_up_last.svg"
              width={250}
              height={380}
              alt="image"
            />
          </div>
        )}

        {/* middle part of the card */}
        <div
          className={`flex flex-col p-4 rounded-2xl border-[2.5px] w-[285px] ${
            isFifth ? "h-[95px]" : "h-[155px]"
          } ${isFourth ? "h-[171px]" : ""} bg-white`}
          style={{ borderColor: innerBorderColor }}
        >
          {!isFourth && !isFifth && (
            <div className={`font-extrabold text-xs text-[#7b6ba7] mb-[8px]`}>
              LAST PRICE
            </div>
          )}
          {!isFourth && !isFifth && (
            <div className={`flex justify-between items-center mb-6`}>
              <div
                className={`font-bold text-xl text-[#ef449c] underline_dotted`}
              >
                {lastPrice}
              </div>
              <div
                className={`flex justify-center items-center bg-[#ef449c] py-[5px] px-2 rounded-md gap-2`}
              >
                <Image
                  src="card_down_arrow.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                <p className={`text-white text-sm font-medium`}>
                  {priceChange}
                </p>
              </div>
            </div>
          )}
          {!isFourth && !isFifth && (
            <div
              className={`flex justify-between items-center font-semibold text-xs text-[#280d5f] mb-1`}
            >
              <div>Locked Price:</div>
              <div>{lockedPrice}</div>
            </div>
          )}
          {!isFifth && (
            <div className="flex justify-between items-center font-extrabold text-md text-[#280D5F]">
              <div>Prize Pool:</div>
              <div>8.5143 BNB</div>
            </div>
          )}
          {/* {isFourth && (
              <div className="text-white font-extrabold flex flex-col justify-center items-center mt-4 gap-1">
                <div className="bg-[#31D0AA] p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md">
                  Enter UP
                  </div>
                <div className="bg-[#ED4B9E] p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md">
                  Enter Down
                  </div>
                  </div>
                )} */}

          {isFourth && (
            <div className="text-white font-extrabold flex flex-col justify-center items-center mt-4 gap-1">
              <div
                className="bg-[#31D0AA] p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                Enter UP
              </div>
              <div
                className="bg-[#ED4B9E] p-1 w-[250px] py-3 rounded-2xl shadow-sm shadow-black text-center text-md"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                Enter Down
              </div>
            </div>
          )}

          {isFifth && (
            <div className="flex flex-col gap-3 text-[#280D5F] justify-center items-center">
              <div className="text-md font-bold">Entry starts</div>
              <div className="text-2xl font-extrabold">~00:38</div>
            </div>
          )}
        </div>
        {!isFifth && (
          <div className={`-mt-[2px]`}>
            <Image
              src="card_down_pink.svg"
              width={250}
              height={380}
              alt="image"
            />
          </div>
        )}

        {isFifth && (
          <div className={`-mt-[2px]`}>
            <Image
              src="card_down_last.svg"
              width={250}
              height={380}
              alt="image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const cardsData = [
  {
    pay1: "1.94x",
    pay2: "2.06x",
    liveText: "Expired",
    txtColor: "#bdc3ce",
    borderColor: "#cfd3da",
    innerBorderColor: "#ef449c",
    cardNumber: "#218484",
    lastPrice: "$227.5332",
    priceChange: "$-0.1066",
    lockedPrice: "$228.9464",
    prizePool: "8.5143BNB",
  },
  {
    pay1: "1.76x",
    pay2: "2.32x",
    liveText: "Expired",
    txtColor: "#bdc3ce",
    borderColor: "#cfd3da",
    innerBorderColor: "#ef449c",
    cardNumber: "#218485",
    lastPrice: "$228.9533",
    priceChange: "$-0.5791",
    lockedPrice: "$228.9473",
    prizePool: "8.5143BNB",
  },
  {
    pay1: "2.15x",
    pay2: "1.87x",
    liveText: "LIVE",
    txtColor: "",
    borderColor: "#7836d3",
    innerBorderColor: "#ef449c",
    cardNumber: "#218486",
    lastPrice: "$225.8452",
    priceChange: "$-0.4141",
    lockedPrice: "$225.4332",
    prizePool: "8.5143BNB",
  },
  {
    pay1: "1.35x",
    pay2: "3.84x",
    liveText: "Next",
    txtColor: "#fff",
    borderColor: "#cfd3da",
    innerBorderColor: "#82c7ea",
    cardNumber: "#218487",
    prizePool: "2.3760BNB",
  },
  {
    liveText: "Later",
    txtColor: "#000",
    borderColor: "#cfd3da",
    innerBorderColor: "#cfd3da",
    cardNumber: "#218488",
  },
];

export default function Cards() {
  const liveTextIconMap = {
    LIVE: "cardplay.svg",
    Expired: "expired.svg",
    Next: "nextPlay.svg",
    Later: "timer.svg",
  };

  return (
    <Swiper
      style={{ width: "100%", overflow: "hidden" }}
      spaceBetween={209}
      slidesPerView={4}
      centeredSlides={true}
      centeredSlidesBounds={true}
      scrollbar={false}
      freeMode={true}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // mousewheel={{ forceToAxis: true }}
      mousewheel={true}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
      {cardsData.map((card, index) => {
        const iconPath =
          liveTextIconMap[card.liveText as keyof typeof liveTextIconMap];

        const isThirdCard = index === 2;
        const isFourthCard = index === 3;
        const isFifthCard = index === 4;
        if (index === 3) {
          return (
            <SwiperSlide key={index}>
              <FlipCard
                key={index}
                card={card}
                icon={iconPath}
                isOpaque={index < 2}
                isFourth={isFourthCard}
                isFifth={isFifthCard}
                isThird={isThirdCard}
              />
            </SwiperSlide>
          );
        } else {
          return (
            <SwiperSlide key={index}>
              <Card
                key={index}
                {...card}
                icon={iconPath}
                isOpaque={index < 2}
                isFourth={isFourthCard}
                isFifth={isFifthCard}
                isThird={isThirdCard}
              />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
}

// export default Card;
