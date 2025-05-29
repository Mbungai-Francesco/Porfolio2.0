import Stack from '../components/Stack'
import { cn } from '../utils/cn'
import { motion } from 'motion/react'
import type { Stack as StackType } from 'src/types/Stack'

const techStack: StackType[] = [
  { name: 'CSS', level: 'Experienced' },
  { name: 'HTML', level: 'Experienced' },
  { name: 'JS', level: 'Experienced' },
  { name: 'TS', level: 'Experienced' },
  { name: 'SASS', level: 'Intermediate' },
  { name: 'React', level: 'Experienced' },
  { name: 'Node', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Angular', level: 'Basic' },
  { name: 'Springboot', level: 'Basic' },
]

const toolStack: StackType[] = [
  { name: 'VSCode', level: 'Experienced' },
  { name: 'Git', level: 'Experienced' },
  { name: 'Docker', level: 'Basic' },
  { name: 'Tailwind', level: 'Experienced' },
  { name: 'Prisma', level: 'Intermediate' },
  { name: 'NPM', level: 'Intermediate' },
]

const Experiences = () => {
  return (
    <div className={cn(`py-14 px-30 h-screen flex flex-col`)}>
      <div className={cn(`w-fit mx-auto text-center flex flex-col gap-3`)}>
        <p className={cn(`text-black/70 text-base`)}>Explore My</p>
        <h2 className={cn(`text-5xl font-semibold`)}>Experiences</h2>
      </div>
      <div
        className={cn(
          `w-full flex items-center justify-between gap-8 grow py-5`,
        )}
      >
        <div
          className={cn(
            `w-1/2 border p-2 rounded-3xl h-full flex flex-col items-center py-4`,
          )}
        >
          <p className={cn(`font-medium text-2xl text-gold mb-2`)}>
            FullStack Development
          </p>
          <div className={cn(`grid grid-cols-3 w-full px-10`)}>
            {techStack.map((tech, index) => (
              <Stack key={index} name={tech.name} level={tech.level} />
            ))}
          </div>
        </div>
        <div
          className={cn(
            `w-1/2 border p-2 rounded-3xl h-full flex flex-col items-center py-4`,
          )}
        >
          <p className={cn(`font-medium text-2xl text-gold mb-2`)}>Tools</p>
          <div className={cn(`grid grid-cols-3 w-full px-10`)}>
            {toolStack.map((tech, index) => (
              <Stack key={index} name={tech.name} level={tech.level} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden p-8 text-center">
        {/* Floating tech stack items */}
        {techStack.map((tech, index) => {
          const x2 = [Math.random() * 30, Math.random() * 20 + 70]
          const x = x2[Math.random() > 0.5 ? 0 : 1] // Randomly choose between the two x positions
          // const x = Math.random() * 80 + 10 // 10-90%
          const y = Math.random() * 60 + 20 // 20-80%
          const delay = Math.random() * 2
          const duration = 3 + Math.random() * 2 // 3-5 seconds

          return (
            <motion.div
              key={index}
              className="absolute text-xl font-bold text-black/80"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              initial={{ y: 0 }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, Math.random() > 0.5 ? 5 : -5, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {tech.name}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Experiences
