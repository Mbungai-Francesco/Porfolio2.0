import Project from '../components/Project'
import { cn } from '../utils/cn'
import space from '../assets/images/space.png'
import countries from '../assets/images/countries.png'
import todo from '../assets/images/todo.png'
import portfolio from '../assets/images/portfolio.png'
import product from '../assets/images/products.jpg'
import testimonial from '../assets/images/testimonial.jpg'
import clipboard2 from '../assets/images/clipboard2.jpg'
import payment from '../assets/images/payment.jpg'
import type { Project as ProjectType } from 'src/types/project'

const Projects = () => {
  const projects: ProjectType[] = [
    {
      img: space,
      title: 'Space Tourism',
      sum: 'Space showcase',
      langs: ['React +', 'TypeScript +', 'Tailwind'],
      code: 'https://github.com/Mbungai-Francesco/Space-Tourism',
      site: 'https://space-tourism-psi-topaz.vercel.app/',
    },
    {
      img: product,
      title: 'Product page',
      sum: 'E-commerce',
      langs: ['HTML +', 'CSS +', 'JavaScript'],
      code: 'https://github.com/Mbungai-Francesco/Product_page',
      site: 'https://product-page-pi-one.vercel.app/',
    },
    {
      img: countries,
      title: 'Country Explorer',
      sum: 'Country Search',
      langs: ['React +', 'TypeScript +', 'Tailwind +', 'API'],
      code: 'https://github.com/Mbungai-Francesco/Country-Search',
      site: 'https://country-search-liard.vercel.app/',
    },
    {
      img: todo,
      title: 'Todo webapp',
      sum: 'Stay reminded',
      langs: ['Angular +', 'Tailwind'],
      code: 'https://github.com/Mbungai-Francesco/Todo',
      site: 'https://todo-mu-amber.vercel.app/',
    },
    {
      img: portfolio,
      title: 'Portfolio',
      sum: 'Ability showcase',
      langs: ['HTML +', 'CSS +', 'JavaScript'],
      code: 'https://github.com/Mbungai-Francesco/Portfolio',
      site: 'https://portfolio-nine-mauve-73.vercel.app/projects',
    },
    {
      img: testimonial,
      title: 'Testimonials Section',
      sum: 'Testimonials component',
      langs: ['HTML +', 'CSS'],
      code: 'https://github.com/Mbungai-Francesco/Testimonial-Section/',
      site: 'https://mbungai-francesco.github.io/Testimonial-Section/',
    },
    {
      img: clipboard2,
      title: 'Clipboard landing page',
      sum: 'Landing page',
      langs: ['HTML +', 'CSS'],
      code: 'https://github.com/Mbungai-Francesco/Clipboard_page/',
      site: 'https://mbungai-francesco.github.io/Clipboard_page/',
    },
    {
      img: payment,
      title: 'Interactive card details',
      sum: 'Interactive form',
      langs: ['HTML +', 'CSS +', 'JavaScript'],
      code: 'https://github.com/Mbungai-Francesco/Interactive_Card_Form',
      site: 'https://mbungai-francesco.github.io/Interactive_Card_Form/',
    },
    {
      img: '',
      title: 'Coming Soon',
      sum: 'Still working',
      langs: [],
      code: '',
      site: '',
    },
  ]

  return (
    <div className={cn(`head`)}>
      <div className={cn(`w-fit mx-auto text-center flex flex-col gap-3`)}>
        <p className={cn(`text-black/70 text-base`)}>Browse My Recent</p>
        <h2 className={cn(`text-5xl font-semibold`)}>Projects</h2>
      </div>
      <div
        className={cn(`my-auto w-full overflow-y-hidden overflow-x-scroll grid grid-flow-col gap-4 items-center py-2`)}
      >
        {projects.map((pro) => (
            <Project props={pro} />
        ))}
      </div>
    </div>
  )
}

export default Projects
