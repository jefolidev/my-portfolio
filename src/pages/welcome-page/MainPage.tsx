import WelcomeText from './components/main-content/WelcomeText'
import WelcomePicture from './components/main-pic/WelcomePicture'

const MainPage = () => {
  return (
    <section
      className=" 
        h-[100vh] flex flex-col items-center justify-center gap-2 p-5 
        xl:justify-between xl:flex-row
        "
    >
      <WelcomePicture />
      <WelcomeText />
    </section>
  )
}

export default MainPage
