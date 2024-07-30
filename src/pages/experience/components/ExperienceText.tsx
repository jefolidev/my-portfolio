import SecondText from './SecondText'

const ExperienceText = () => {
  return (
    <section className="text-white font-bold italic font-jetmono text-2xl px-12 ">
      <div>
        <a className="text-[#F2C216] "> JPLM Sistemas</a>
        <a> | 04/2024 - 07/204 |</a>
      </div>
      <p className="px-12 py-2">
        Nessa empresa forneci manutenção à um Warehouse Manegement System (WMS);
      </p>
      <div className="flex flex-col gap-5 py-5 px-6">
        <SecondText>
          Implantei um sistema de filtragem mais preciso para a conferência de
          pedidos;
        </SecondText>
        <SecondText>
          Auxiliei clientes na instalação do software no servidor deles;
        </SecondText>
        <SecondText>
          Revisei e atualizei códigos que estavam depreciados e otimizei o
          funcionamento do WMS;
        </SecondText>
        <SecondText>
          Utiizava SCRUM com o resto da equipe para administrar a demanda de
          pedidos dos clientes.
        </SecondText>
      </div>
    </section>
  )
}

export default ExperienceText
