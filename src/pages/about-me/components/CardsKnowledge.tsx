type CardsKnowledgeType = {
  firstText: string
  secondText?: string
  cardIcon: string
  imgStyle?: string
}

const CardsKnowledge: React.FC<CardsKnowledgeType> = ({
  firstText,
  secondText,
  cardIcon,
  imgStyle,
}) => {
  return (
    <div className="flex flex-col items-center gap-[10px] lg:gap-5 text-white font-semibold italic ">
      <div
        className="
      bg-[#F2C216] rounded-2xl w-[100px] h-[100px] flex items-center justify-center
      lg:w-[110px] lg:h-[110px]
      xl:w-[130px] xl:h-[130px] "
      >
        <img src={cardIcon} className={imgStyle} />
      </div>
      <div className="flex flex-col items-center ">
        <span
          className="
        font-jetmono font-semibold text-xl
        md:text-xl
        "
        >
          {firstText}
        </span>
        <span className="font-jetmono font-semibold text-sm lg:text-md text-white/80">
          {secondText}
        </span>
      </div>
    </div>
  )
}

export default CardsKnowledge
