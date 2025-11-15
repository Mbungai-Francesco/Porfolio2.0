import { BadgeCheck } from 'lucide-react'
import { cn } from '../utils/cn'
import type { Stack as StackType } from 'src/types/Stack'

const Stack = ({ stack }: { stack: StackType }) => {
  return (
    <div className={cn(`flex gap-2 sm:gap-4 mb-2 `)}>
      <BadgeCheck />
      <div>
        <p className="font-semibold text-lg ">{stack.name}</p>
        <p className={cn(`text-sm text-black/70`)}>{stack.level}</p>
      </div>
    </div>
  )
}

export default Stack