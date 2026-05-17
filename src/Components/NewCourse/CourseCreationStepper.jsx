import React from 'react'
import { useLocation } from 'react-router-dom'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const STEPS = [
  { label: 'Nuevo Curso', path: '/cursos/nuevo-curso' },
  { label: 'Nueva Lección', path: '/cursos/curriculum' },
  { label: 'Publicar Curso', path: '/cursos/publicar' },
]

const CourseCreationStepper = () => {
  const { pathname } = useLocation()
  const currentIndex = STEPS.findIndex((s) => s.path === pathname)

  return (
    <div className="flex items-center justify-center px-8 py-5 bg-white border-b border-border">
      {STEPS.map((step, index) => {
        const isCompleted = index < currentIndex
        const isActive = index === currentIndex

        return (
          <React.Fragment key={step.path}>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all',
                  isCompleted && 'bg-[#102A43] text-white',
                  isActive && 'bg-[#102A43] text-white ring-4 ring-red-100',
                  !isCompleted && !isActive && 'bg-muted text-muted-foreground'
                )}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span
                className={cn(
                  'text-xs font-medium whitespace-nowrap transition-colors',
                  isActive && 'text-[#102A43]',
                  isCompleted && 'text-foreground',
                  !isCompleted && !isActive && 'text-muted-foreground'
                )}
              >
                {step.label}
              </span>
            </div>

            {index < STEPS.length - 1 && (
              <div
                className={cn(
                  'h-0.5 w-24 mx-3 mb-5 rounded-full transition-colors',
                  index < currentIndex ? 'bg-[#102A43]' : 'bg-border'
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default CourseCreationStepper
