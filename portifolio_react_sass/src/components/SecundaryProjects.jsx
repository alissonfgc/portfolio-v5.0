import '../styles/components/secundaryprojects.scss'
//import CarouselProjects from './CarouselProjects'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const SecundaryProjects = () => {
  return (
    <section id='secundary-projects'>
      <div id='secundary-projects-title'>
        <h2>Outros projetos</h2>
      </div>
      <div id='carousel-secundary-projects'>
        Cards components ficam aqui, com os projetos secundarios
        <br />
        Os cards devem ter um titulo, link do repositorio, onde a explicação do projeto ficara do .read-me do repositorio
      </div>
    </section>
  )
}

export default SecundaryProjects