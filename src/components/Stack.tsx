import { BadgeCheck } from 'lucide-react'
import { cn } from '../utils/cn'
import type { Stack as StackType } from 'src/types/Stack'

const Stack = ({ name, level } : StackType) => {
  return (
    <div className={cn(`flex gap-4 mb-2`)}>
      <BadgeCheck />
      <div>
        <p className="font-semibold text-xl">{name}</p>
        <p className={cn(`text-black/70`)}>{level}</p>
      </div>
    </div>
  )
}

export default Stack