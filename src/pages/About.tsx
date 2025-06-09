import { cn } from '../utils/cn'
import me from '../assets/images/Me.jpg'
import { Award, BookCopy } from 'lucide-react'
import "../css/about.css"

const About = () => {
  return (
    <div className={cn(`head`)}>
      <div className={cn(`w-fit mx-auto text-center flex flex-col gap-3`)}>
        <p className={cn(`text-black/70 text-base`)}>Get to know more</p>
        <h2 className={cn(`text-5xl font-semibold`)}>About Me</h2>
      </div>
      <div className="items-center flex flex-col lg:flex-row  m-auto w-full md:gap-8">
        <img src={me} alt="" className="aspect-square w-80 rounded-2xl mt-6" />
        <div className={cn(`py-4 md:py-8 flex flex-col h-full`)}>
          <div className={cn(`w-full flex flex-col sm:flex-row items-center justify-between gap-8 grow py-5`)}>
            <div className={cn(`w-full sm:w-1/2 border p-2 rounded-3xl h-full flex flex-col items-center py-4 text-center`)}>
              <Award />
              <p className={cn(`font-medium text-xl text-gold`)}>Experience</p>
              <p className={cn(`mid-text`)}>2+ Years</p>
              <p className={cn(`mid-text`)}>FullStack Development</p>
            </div>
            <div className={cn(`w-full sm:w-1/2 border p-2 rounded-3xl h-full flex flex-col items-center py-4 text-center`)}>
              <BookCopy />
              <p className={cn(`font-medium text-xl text-gold`)}>Education</p>
              <p className={cn(`mid-text`)}>Software Engineering Degree</p>
              {/* <p className={cn(`mid-text`)}>FullStack Development</p> */}
            </div>
          </div>
          <p className={cn(`text-black/70 text-justify`)}>
            I am a <span className='text-gold'>frontend developer</span> I have a strong background in creating
            visually appealing and <span className='text-gold'>user-friendly web experiences</span>. I am motivated
            to find a role where I can challenge myself <span className='text-gold'>and provide value to
            website users</span>. I am excited to bring my knowledge and experience to
            a team and contribute to a company's success.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
