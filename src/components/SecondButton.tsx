import { ButtonType } from './MainButton'

const SecondButton: React.FC<ButtonType> = ({ children }) => {
  return (
    <button
      className={` w-[200px] h-[50px] xl:w-[280px] xl:h-[60px] text-2xl bg-[#0C0C30] border-[5px] border-[#F2C216] text-[#F2C216] font-jetmono font-semibold xl:text-3xl m-auto italic rounded-full`}
    >
      {children}
    </button>
  )
}

export default SecondButton
