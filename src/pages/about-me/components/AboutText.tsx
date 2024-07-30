const AboutText = () => {
  return (
    <div className="px-5 py-12 font-jetmono text-white lg:text-2xl xl:font-semibold italic max-w-[1200px] ">
      <div>
        <span> {`function `} </span>{' '}
        <span className="text-[#F2C216]"> QuemSouEU </span>
        <span> {`() { `}</span>
      </div>
      <article>
        <span className="font-jetmono text-white ">
          {`“Me chamo Jeferson, tenho 18 anos e estou no segundo período de Análise e Desenvolvimento de Sistemas. Sou um profissional que atua principalmente com `}
        </span>
        <span className="text-[#F2C216] ">TypeScript, React, NodeJS</span>
        <span className="">{` além de flertar um pouco com`} </span>
        <span className="text-[#F2C216] "> PHP </span>
        <span className=""> e </span>
        <span className="text-[#F2C216] "> C#</span>
        <span className="">{`. Possuo também habilidades com `}</span>
        <span className="text-[#F2C216] "> MySQL </span>
        <span className=""> e </span>
        <span className="text-[#F2C216] "> Postgres </span>
        <span className="">e sou um ótimo </span>
        <span className="text-[#F2C216] ">UI Designer</span>
        <span className="text-2xl">{`.” }`}</span>
      </article>
    </div>
  )
}

export default AboutText
