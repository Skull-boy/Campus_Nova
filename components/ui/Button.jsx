'use client'

const variants = {
    primary: 'bg-primary-600 text-white shadow-[0_2px_8px_rgba(79,70,229,0.3)] hover:shadow-[0_4px_16px_rgba(79,70,229,0.4)] hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    secondary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-sm',
    ghost: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    accent: 'bg-accent-500 text-white shadow-[0_2px_8px_rgba(236,72,153,0.3)] hover:shadow-[0_4px_16px_rgba(236,72,153,0.4)] hover:bg-accent-600 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
}

const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    onClick,
    type = 'button',
    ...props
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        rounded-xl font-semibold transition-all duration-200 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        inline-flex items-center justify-center gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    )
}
