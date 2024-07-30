import foto from './fotominha-min.jpeg'
import fotoCircle from './fotominhacircle.png'

const WelcomePicture = () => {
  const formOfElement =
    'rounded-tr-[425px] rounded-tl-[336px] rounded-br-[236px] rounded-bl-[350px]'
  const formOfPic =
    'xl:rounded-tr-[405px] xl:rounded-tl-[236px] xl:rounded-br-[236px] xl:rounded-bl-[405px]'

  return (
    <div>
      <div
        className={`
            w-[250px] h-[250px] bg-[#17153b] rounded-full 
            lg:invisible
            xl:w-[520px] xl:h-[520px] xl:bg-[#17153B] absolute xl:z-20 xl:left-[80px] xl:top-[80px] overflow-hidden ${formOfPic} invisible xl:visible
            `}
      >
        <img
          src={foto}
          className="
              h-full w-full absolute object-cover invisible 
              lg:invisible
              xl:visible "
        />
      </div>

      <img
        src={fotoCircle}
        className="
            w-[210px] mb-5 z-10 left-[56px] top-[10px] 
            md:w-[230px] md:left-[268px] md:top-[25px] 
            lg:w-[220px] lg:left-[403px] lg:top-[30px] 
            xl:invisible"
      />

      <div className="absolute top-[40px]">
        <div
          className={`
            w-[480px] h-[480px] bg-[#17153B] absolute z-10 left-[32px] top-[0px] ${formOfElement} invisible 
            xl:visible 
            lg:invisible`}
        />
        <div
          className={`
            w-[480px] h-[480px] bg-[#161652] absolute left-[150px] top-[100px] ${formOfElement} invisible 
            xl:visible 
            lg:invisible`}
        />
      </div>
    </div>
  )
}

export default WelcomePicture
