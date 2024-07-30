export type ButtonType = {
  children: string
}

const MainButton: React.FC<ButtonType> = ({ children }) => {
  return (
    <button
      className={`w-[200px] h-[50px] xl:w-[280px] xl:h-[60px] bg-[#F2C216] text-[#0C0C30] font-jetmono font-semibold text-xl italic rounded-full`}
    >
      {children}
    </button>
  )
}

export default MainButton
