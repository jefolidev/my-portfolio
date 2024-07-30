import Title from '../../components/Title'
import ExperienceText from './components/ExperienceText'
import NewExperience from './components/NewExperience'

const MainPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden lg:p-2 lg:gap-5 xl:gap-0 xl:px-[50px]">
      <Title
        classNameBehind={`
          text-9xl invisible
          lg:text-8xl lg:right-[250px] lg:visible
          xl:right-[255px] mb-12 `}
        classNameFront={`
          text-5xl left-[460px] 
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
