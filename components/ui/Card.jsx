'use client'

export default function Card({
    children,
    className = '',
    hover = true,
    gradient = false,
    onClick,
    ...props
}) {
    return (
        <div
            onClick={onClick}
            className={`
        rounded-2xl bg-white p-6
        ${gradient ? 'border-2 border-transparent bg-gradient-to-br from-primary-50 to-secondary-50' : 'border border-gray-200'}
        ${hover ? 'hover:shadow-neu-lg transition-all duration-300 hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    )
}
