import Title from '../../components/Title'
import Square from './components/Square'

const MainPage = () => {
  return (
    <section className="h-full w-full overflow-hidden flex flex-col justify-center items-center gap-5">
      <Title
        classNameBehind="
        lg:visible lg:text-8xl lg:right-[200px]
        xl:right-[190px] xl:p-12"
        classNameFront="
        text-5xl left-[50px]
        lg:text-7xl lg:left-[560px] lg:bottom-[5px]
        xl:left-[630px] xl:bottom-[15px] "
      >
        ACADÊMICO
      </Title>
      <div className="flex flex-col gap-12 text-white font-jetmono italic font-semibold text-2xl py-6">
        <div className="flex flex-col lg:flex-row justify-center items-center  ">
          <Square />
          <div className="flex flex-col p-12 gap-12 lg:gap-0 lg:p-5">
            <p>2022 | EEP Onélio Porto | Técnico de Informática </p>
            <p>2023 | Polivalente | Ensino Médio Concluído</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Square />
          <div className="flex flex-col p-12 gap-3 lg:gap-0 lg:p-8">
            <p>2024 | UniAteneu </p>
            <p>Cursando Análise e Desenvolvimento de Sistemas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage
