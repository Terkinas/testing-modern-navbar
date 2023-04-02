import { Html, Head, Main, NextScript } from 'next/document'
import { cn } from '@/lib/utils'

export default function Document() {
  return (
    <Html lang="en"
    className={cn('bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-300')}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
