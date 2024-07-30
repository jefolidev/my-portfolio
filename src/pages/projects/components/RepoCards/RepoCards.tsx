import MainButton from '../../../../components/MainButton'
import seta from './assets/seta.svg'
import CardImage from './components/CardImage'

type RepoCardsType = {
  path: string
  titleStyle: string
  descStyle: string
  imageStyle: string
  cardText: string
  cardDescription: string
  divStyle: string
  repoLink: string
}

const RepoCards: React.FC<RepoCardsType> = ({
  path,
  titleStyle,
  descStyle,
  imageStyle,
  cardText,
  cardDescription,
  divStyle,
  repoLink,
}) => {
  return (
    <div className="group w-[300px] h-[365px] lg:w-[400px] lg:h-[465px] [perspective:1000px] text-white font-jetmono flex flex-col gap-5 items-center">
      <div className="w-full h-full bg-[#1c1c4b] rounded-3xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-500">
        <div className="">
          <CardImage path={path} className={imageStyle} />
          <div
            className={`${divStyle} flex flex-col absolute items-center text-white font-poppins `}
          >
            <p className={titleStyle}> {cardText} </p>
            <p className={descStyle}> {cardDescription} </p>
          </div>
          <img
            src={seta}
            className="size-6 absolute top-[390px] left-[360px]"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#1c1c4b] rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] gap-5">
          <b className="text-3xl "> Ver repositório </b>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <MainButton> Ir para página </MainButton>
          </a>
          <img
            src={seta}
            className="size-6 absolute top-[390px] left-[360px] rotate-180"
          />
        </div>
      </div>
      <div>
        <div className="w-5 h-2 bg-slate-200 rounded-full group-hover:w-32 flex items-center justify-center transition-all duration-700 ">
          <div className="w-5 h-2 bg-[#f2c216] rounded-full invisible group-hover:w-full group-hover:visible transition-all ease-in duration-[600ms] " />
        </div>
      </div>
    </div>
  )
}

export default RepoCards
