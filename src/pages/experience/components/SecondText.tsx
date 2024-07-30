const SecondText = ({ children }: { children: string }) => {
  return (
    <span className='before:content-["-"] before:text-[#F2C216] before:mr-6 before:w-96 before:h-96 font-jetmono text-white text-2xl'>
      {children}
    </span>
  )
}

export default SecondText
