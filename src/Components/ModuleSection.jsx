import React from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const ModuleSection = ({
  module,
  leading,
  actions,
  footer,
  isOpen,
  onToggle,
  className = 'bg-white rounded-xl border border-gray-200 mb-6 text-gray-900',
  children,
}) => {
  const isAccordion = onToggle !== undefined
  const showChildren = !isAccordion || isOpen

  return (
    <div className={className}>
      <div
        className={`flex items-center justify-between p-5 ${isAccordion ? 'cursor-pointer hover:bg-white/5 transition-colors' : ''}`}
        onClick={isAccordion ? onToggle : undefined}
      >
        <div className="flex items-center gap-3">
          {leading}
          {module.number != null && (
            <span className="text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded uppercase tracking-wider">
              Module {module.number < 10 ? '0' + module.number : module.number}
            </span>
          )}
          <div>
            <h3 className="text-xl font-bold">{module.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {actions}
          {isAccordion && (
            <span className="opacity-60">
              {isOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
            </span>
          )}
        </div>
      </div>

      {showChildren && children}

      {footer}
    </div>
  )
}

export default ModuleSection
