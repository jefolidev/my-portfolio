import Title from '../../components/Title'
import Card from './components/RepoCards/RepoCards'
import onepieceLandingPage from './components/RepoCards/assets/onepiece-landingpage.png'
import gitHubProjetc from './components/RepoCards/assets/repositories-view.png'

const MainPage = () => {
  return (
    <section className="h-full w-full bg-[#070727] overflow-hidden flex flex-col justify-center items-center gap-5">
      <Title
        classNameBehind="
        lg:visible lg:text-9xl 
        xl:right-[150px] xl:p-12
      "
        classNameFront="
        lg:text-7xl
        xl:left-[420px] xl:bottom-[10px] "
      >
        Projetos
      </Title>
      {}
      <section className="flex flex-col lg:flex-row gap-12 px-5 py-12">
        <Card
          path={onepieceLandingPage}
          imageStyle="absolute rounded-t-3xl h-52 lg:h-60"
          cardText="One Piece Landing Page"
          cardDescription="Uma simples landing page que mostra informações sobre alguns personagens de uma animação japonesa."
          titleStyle="text-xl lg:text-3xl"
          descStyle="text-[12px] xl:text-base px-5 py-2 text-gray-400"
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
