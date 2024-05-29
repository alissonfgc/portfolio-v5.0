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
      <div id='filter-for-projects'>
        <button class='button-filter'>Java</button>
        <button class='button-filter'>Java Spring</button>
        <button class='button-filter'>PHP</button>
        <button class='button-filter'>MySQL</button>
        <button class='button-filter'>JavaScript</button>
        <button class='button-filter'>CSS</button>
        <button class='button-filter'>Bootstrap</button>
        <button class='button-filter'>Tailwind</button>
      </div>
      <div id='carousel-secundary-projects'>
      {/* Aqui vai ter um slider */}
      </div>
    </section>
  )
}

export default SecundaryProjects