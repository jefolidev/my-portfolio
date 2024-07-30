import MainButton from '../../../../components/MainButton'
import SecondButton from '../../../../components/SecondButton'

const WelcomeText = () => {
  return (
    <div className="flex flex-col justify-center xl:mr-[20px]">
      <div className="bg-neutral-950/90 w-full h-8 rounded-t-xl flex gap-2 justify-end items-center p-2  ">
        <div className="w-3 h-3 bg-green-600 rounded-full" />
        <div className="w-3 h-3 bg-yellow-600 rounded-full" />
        <div className="w-3 h-3 bg-red-600 rounded-full" />
      </div>
      <div className="bg-neutral-800/60 p-5 rounded-b-xl ">
        <span className="text-white text-[24px] font-jetmono italic font-semibold xl:text-[38px]">
          console.log(
        </span>
        <div className="-mt-3 italic font-semibold xl:ml-[40px]">
          <span className="text-white text-[20px] mr-4 font-jetmono xl:text-[38px] ">
            Me chamo
          </span>
          <span className="text-[#F2C216] text-[24px] font-jetmono xl:text-[42px] ">
            Jeferson
          </span>
          <span className="text-white text-[24px] xl:text-[38px] ">!);</span>
        </div>

        <div className=" flex flex-col font-semibold italic mt-4 xl:ml-8">
          <span className="text-white text-[20px] font-jetmono xl:text-[22px]">
            const Jeferson = "
          </span>
          <span className="text-[#F2C216] text-[20px] font-jetmono xl:text-[26px] ">
            Desenvolvedor Full Stack"
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-[30px] xl:flex xl:flex-row">
        <a
          href="https://github.com/jefolidev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainButton> GitHub </MainButton>
        </a>
        <SecondButton> Baixar CV </SecondButton>
      </div>
    </div>
  )
}

export default WelcomeText
