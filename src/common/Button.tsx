import { FC } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`bg-blue-500 text-white p-3 border-transparent border-[1px] rounded-xl font-bold transition-colors duration-300 hover:bg-white hover:text-blue-500  hover:border-blue-500 ${className}`} {...props}>
      {children}
    </button>
  )
}
