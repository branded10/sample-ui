import Image from "next/image";

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
}

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
  return (
    <div>
      <div
        className={`w-[450px] h-[512px] ${
          isFifth && "h-[414px] mt-10"
        } bg-white rounded-[30px] border-[2px] border-b-[5px] ${
          isOpaque && "opacity-50"
        }`}
        style={{ borderColor: borderColor }}
      >
        <div
          className={`flex justify-between items-center px-6 py-3 ${
            isFourth && "bg-[#7645D9]"
          } ${isFifth && "bg-[#E7E3EB]"} rounded-t-[30px] overflow-hidden `}
        >
          <div className="flex items-center">
            <div>
              <Image src={icon} width={30} height={30} alt="play" />
            </div>
            <div
              className={`ml-1 font-extrabold text-xl`}
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
            <div
              className={`bg-[#7836d3] h-2.5`}
              style={{ width: "45%" }}
            ></div>
          </div>
        )}

        <div className={`flex flex-col justify-center items-center mt-6`}>
          {!isFifth && (
            <div className={`-mb-[2px]`}>
              <Image
                src="card_up_white.svg"
                width={350}
                height={580}
                alt="image"
              />
            </div>
          )}
          {isFifth && (
            <div className={`-mb-[2px]`}>
              <Image
                src="card_up_last.svg"
                width={350}
                height={580}
                alt="image"
              />
            </div>
          )}
          <div
            className={`flex flex-col p-4 rounded-3xl border-[3.5px] w-[400px] h-[215px] ${
              isFifth && "h-[113px]"
            } ${isFourth && "h-[225px]"} bg-white`}
            style={{ borderColor: innerBorderColor }}
          >
            {!isFourth && !isFifth && (
              <div className={`font-bold text-[#7b6ba7] mb-[15px]`}>
                LAST PRICE
              </div>
            )}
            {!isFourth && !isFifth && (
              <div className={`flex justify-between items-center mb-6`}>
                <div
                  className={`font-bold text-3xl text-[#ef449c] underline_dotted`}
                >
                  {lastPrice}
                </div>
                <div
                  className={`flex justify-center items-center bg-[#ef449c] py-2 px-2 rounded-md gap-2`}
                >
                  <Image
                    src="card_down_arrow.svg"
                    width={30}
                    height={30}
                    alt="arrow"
                  />
                  <p className={`text-white text-xl font-medium`}>
                    {priceChange}
                  </p>
                </div>
              </div>
            )}
            {!isFourth && !isFifth && (
              <div
                className={`flex justify-between items-center font-semibold text-lg text-[#4e459b] mb-1`}
              >
                <div>Locked Price:</div>
                <div>{lockedPrice}</div>
              </div>
            )}
            {!isFifth && (
              <div className="flex justify-between items-center font-extrabold text-xl text-[#280D5F]">
                <div>Prize Pool:</div>
                <div>8.5143BNB</div>
              </div>
            )}
            {isFourth && (
              <div className="text-white font-extrabold flex flex-col justify-center items-center mt-4 gap-1">
                <div className="bg-[#31D0AA] p-3 w-[300px] py-5 rounded-2xl shadow-sm shadow-black text-center text-xl">
                  Enter UP
                </div>
                <div className="bg-[#ED4B9E] p-3 w-[300px] py-5 rounded-2xl shadow-sm shadow-black text-center text-xl">
                  Enter Down
                </div>
              </div>
            )}
            {isFifth && (
              <div className="flex flex-col gap-3 text-[#280D5F] justify-center items-center">
                <div className="text-xl font-bold">Entry starts</div>
                <div className="text-3xl font-extrabold">~00:38</div>
              </div>
            )}
          </div>
          {!isFifth && (
            <div className={`-mt-[2px]`}>
              <Image
                src="card_down_pink.svg"
                width={350}
                height={580}
                alt="image"
              />
            </div>
          )}

          {isFifth && (
            <div className={`-mt-[2px]`}>
              <Image
                src="card_down_last.svg"
                width={350}
                height={580}
                alt="image"
              />
            </div>
          )}
        </div>
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

  // const iconPath = liveTextIconMap[liveText];

  return (
    <div className="w-full flex overflow-x-auto justify-center items-center scrollbar-hide gap-7">
      {cardsData.map((card, index) => {
        const iconPath =
          liveTextIconMap[card.liveText as keyof typeof liveTextIconMap];

        const isThirdCard = index === 2;
        const isFourthCard = index === 3;
        const isFifthCard = index === 4;
        return (
          <Card
            key={index}
            {...card}
            icon={iconPath}
            isOpaque={index < 2}
            isFourth={isFourthCard}
            isFifth={isFifthCard}
            isThird={isThirdCard}
          />
        );
      })}
    </div>
  );
}

// export default Card;
