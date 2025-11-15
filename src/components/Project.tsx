import { Eye, Github } from 'lucide-react'
import { cn } from '../utils/cn'
import type { Project as ProjectType } from 'src/types/project'

interface prop {
  props: ProjectType
}

const Project = ({ props }: prop) => {
  const langs = props.langs || []

  return (
    <div className={cn(`w-[20em] shadow-md rounded-lg h-fit`)}>
      {props.img != '' ? <img src={props.img} alt="" className="" /> : <></>}
      <div className={cn(`py-2 px-4 `)}>
        <div className={cn(``)}>
          <p className={cn(`text-xl`)}>{props.title}</p>
          <p className={cn(`text-black/60`)}>{props.sum}</p>
        </div>
        <div className="flex gap-2 my-2 flex-wrap">
          {langs.map((lang) => (
            <p className={cn(`text:lg sm:text-xl`)}>{lang}</p>
          ))}
        </div>
        <div className={cn(`flex gap-10 `)}>
          {props.code != '' ? (
            <>
              <div className="flex items-center gap-2 cursor-pointer">
                <Github className="" />
                <a
                  href={props.code}
                  target="_blank"
                  className={cn(`text-black/70`)}
                >
                  Code
                </a>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <Eye className="" />
                <a
                  href={props.site}
                  target="_blank"
                  className={cn(`text-black/70`)}
                >
                  View
                </a>
              </div>
            </>
          ) : (
            <p>Thanks for Scrolling 😁</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
