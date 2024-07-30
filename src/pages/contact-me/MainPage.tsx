import emailIcon from './assets/emailIcon.svg'
import githubIcon from './assets/githubIcon.svg'
import linkedinIcon from './assets/linkedinIcon.svg'
import whatsappIcon from './assets/whatsappIcon.svg'

const MainPage = () => {
  return (
    <section className="h-full w-full bg-[#070727] overflow-hidden flex flex-col justify-center items-center gap-5">
      <div className="">
        <div className="flex gap-16 py-8">
          <div className="w-72 xl:h-full bg-white text-black font-poppins rounded-xl flex flex-col gap-2 items-center px-6 py-5">
            <b className="text-3xl  ">Entre em contato comigo!</b>
            <p className="border-t-2 border-dotted border-black py-5 text-lg">
              Acesse meu Linkedin e GitHub!
            </p>
            <div className="flex gap-1 ">
              <a
                href="https://github.com/jefolidev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} className="size-12 xl:size-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/jeferson-franco-1349062b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} className="size-12 xl:size-6" />
              </a>
              <a
                href="https://wa.me/5585987146194"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsappIcon} className="size-12 xl:size-6" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emailIcon} className="size-12 xl:size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage
