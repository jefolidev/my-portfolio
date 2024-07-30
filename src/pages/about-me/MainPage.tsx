import Title from '../../components/Title'

import duoliongoIcon from './assets/duoliongoIcon.svg'
import laptopIcon from './assets/laptopIcon.svg'
import photoshopIcon from './assets/photoshopIcon.svg'

import AboutText from './components/AboutText'
import CardsKnowledge from './components/CardsKnowledge'

const MainPage = () => {
  return (
    <section
      className="h-full w-full bg-[#070727] flex flex-col justify-around lg:justify-around xl:justify-between items-center py-16
  "
    >
      <Title
        classNameBehind="lg:text-7xl lg:right-36 lg:visible xl:text-8xl xl:right-56 text-7xl "
        classNameFront=" 
          bottom-[px] left-[40px]
          lg:text-5xl lg:left-[380px] lg:bottom-[8px]
          xl:text-7xl xl:left-[540px] xl:bottom-[8px]"
      >
        SOBRE MIM
      </Title>
      <AboutText />
      <section
        className="
          flex flex-col gap-5 py-8
          lg:flex-row md:gap-12 md:mb-16  
          xl:flex-row xl:mb-16"
      >
        <CardsKnowledge
          cardIcon={laptopIcon}
          firstText="2 Anos de Experiência"
          secondText="c/TypeScript, React e MySQL"
        />
        <CardsKnowledge
          cardIcon={duoliongoIcon}
          firstText="Inglês Intermediário"
        />
        <CardsKnowledge
          cardIcon={photoshopIcon}
          imgStyle="size-24 "
          firstText="Designer Gráfico"
          secondText="no tempo livre"
        />
      </section>
    </section>
  )
}

export default MainPage
