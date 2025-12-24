const Button = ({ className, size = "default", children }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const baseClasses =
    "relative overflow-hidden items-center gap-2 font-medium text-sm rounded-full focus:outline-none transition-all duration-200 ease-in-out focus:ring-2 bg-primary text-white text-primary-foreground shadow-lg";
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
