import Title from '../../components/Title'
import ExperienceText from './components/ExperienceText'
import NewExperience from './components/NewExperience'

const MainPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden lg:p-2 lg:gap-5 xl:gap-0 xl:px-[50px]">
      <Title
        classNameBehind={`
          text-9xl -mt-12
          lg:text-8xl lg:top-[5px] lg:right-[350px] lg:py-[50px] lg:visible
          xl:right-[255px] mb-12 `}
        classNameFront={`
          text-4xl left-[22px]  
          lg:text-7xl lg:left-[620px] lg:bottom-[5px]
          xl:left-[640px] xl:bottom-[10px]`}
      >
        EXPERIÊNCIA
      </Title>
      <ExperienceText />
      <NewExperience />
    </section>
  )
}

export default MainPage
