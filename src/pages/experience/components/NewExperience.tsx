const NewExperience = () => {
  return (
    <section className="lg:flex items-center justify-center gap-12 mt-10 px-16 text-gray-500 font-jetmono">
      <div className="invisible lg:visible">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-8xl"> + </p>
        </a>
      </div>
      <div>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b className="text-3xl">
            Me permita levar minha dedicação e otimização de tempo para a sua
            empresa também!
          </b>
        </a>
      </div>
    </section>
  )
}

export default NewExperience
