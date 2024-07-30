import Title from '../../components/Title'
import Card from './components/RepoCards/RepoCards'
import onepieceLandingPage from './components/RepoCards/assets/onepiece-landingpage.png'
import gitHubProjetc from './components/RepoCards/assets/repositories-view.png'

const MainPage = () => {
  return (
    <section className=" bg-[#070727] overflow-hidden flex flex-col justify-center items-center gap-5">
      <Title
        classNameBehind="
        lg:visible lg:text-9xl lg:top-5 lg:right-[120px] lg:flex lg:items-center
        xl:right-[180px] xl:py-12 xl:-mb-12
      "
        classNameFront="
        text-6xl left-8 top-[40px] bottom-[0px]
        lg:text-7xl lg:left-[440px] lg:top-[10px]
        xl:text-8xl xl:left-[480px] xl:top-[0px] xl:bottom-[0px] "
      >
        Projetos
      </Title>

      <section className="flex flex-col lg:flex-row gap-12 lg:px-5 lg:py-12 py-16">
        <Card
          path={onepieceLandingPage}
          imageStyle="absolute rounded-t-3xl h-52 lg:h-60"
          cardText="One Piece Landing Page"
          cardDescription="Uma simples landing page que mostra informações sobre alguns personagens de uma animação japonesa."
          titleStyle="text-xl lg:text-3xl"
          descStyle="text-[12px] xl:text-base lg:px-5 lg:py-2 text-gray-400 px-7 py-2"
          divStyle="top-56 lg:top-64 lg:py-6"
          repoLink="https://github.com/jefolidev/onepiece-landingpage"
        />
        <Card
          path={gitHubProjetc}
          imageStyle="absolute rounded-t-3xl h-42 lg:h-60"
          cardText="Profile Searcher"
          cardDescription="Um site em que busca usuários do github, além de acessar e receber informações dos repositórios."
          titleStyle="text-2xl lg:text-3xl"
          descStyle="text-sm lg:text-base px-5 py-2 text-gray-400"
          divStyle="top-52 lg:top-64 lg:py-6"
          repoLink="https://github.com/jefolidev/github-search"
        />
      </section>
      {/* <MainButton> Veja mais </MainButton> */}
    </section>
  )
}

export default MainPage
