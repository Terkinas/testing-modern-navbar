import { FC } from 'react'

import { cn } from '@/lib/utils'

// const headingVariants = cva(
//   'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
//   {
//     variants: {
//       size: {
//         default: 'text-4xl md:text-5xl lg:text-6xl',
//         lg: 'text-5xl md:text-6xl lg:text-7xl',
//         sm: 'text-2xl md:text-3xl lg:text-4xl',
//       },
//     },
//     defaultVariants: {
//       size: 'default',
//     },
//   }
// )

const headingVariants = {}

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    React.RefAttributes<HTMLHeadingElement> {
  size?: keyof typeof headingVariants
}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 {...props} className={{ className } + ' text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter'}>
      {children}
    </h1>
  )
}

export default LargeHeading