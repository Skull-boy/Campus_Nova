export default function Input({
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    error,
    icon: Icon,
    required = false,
    ...props
}) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon size={20} />
                    </div>
                )}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`
                        w-full px-4 py-3 rounded-xl border transition-all
                        ${Icon ? 'pl-12' : ''}
                        ${error
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'
                        }
                        focus:outline-none focus:ring-2 focus:ring-opacity-50
                        bg-white/50 backdrop-blur-sm
                        placeholder:text-gray-400
                    `}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}
