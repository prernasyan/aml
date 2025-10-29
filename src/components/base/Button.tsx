
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'whitespace-nowrap cursor-pointer font-semibold transition-all duration-300 hover:scale-105';
  
  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-300',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
