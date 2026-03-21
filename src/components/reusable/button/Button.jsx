export default function Button({
  children,
  isLoading = false,
  disabled,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`w-full py-2 px-4 text-white font-semibold rounded-lg
      bg-linear-to-r from-purple-500 to-blue-600
      hover:opacity-90 transition
      disabled:opacity-50 disabled:cursor-not-allowed
      flex items-center justify-center gap-2
      ${className}`}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {isLoading ? "جاري الإرسال..." : children}
    </button>
  );
}
