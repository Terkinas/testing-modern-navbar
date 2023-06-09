import Head from 'next/head'
import { Inter } from 'next/font/google'

import Button from '@/components/button/Button'
import Navbar from '@/components/navbar/Navbar'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Navbar />

        <div className='relative h-screen flex items-center justify-center overflow-x-hidden dark:bg-slate-900 dark:text-slate-300 mx-auto'>
          <div className='container max-w-7xl w-full mx-auto h-full'>
            <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
              {/* <h1 className='text-4xl text-center font-bold text-gray-900 dark:text-green-500 drop-shadow-sm drop-shadow-[0_35px_35px_rgba(0,255,0,0.25)]'>Easily determine <br/> text similarity</h1> */}
              <div className='flex justify-evenly items-center w-full'>
                <div>
                  <LargeHeading className='three-d'>Vietove.lt</LargeHeading>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl tincidunt nisl, nec aliquet nisl nisl sit amet lorem. Sed euismod, nisl nec ultricies lacinia, nisl nisl tincidunt nisl, nec aliquet nisl nisl sit amet lorem.</p>
                </div>
                <Image className='' src={'/images/cotton-ping-cloud.png'} alt='Pink Circus Tent' width={500} height={500} />
              </div>
            </div>
          </div>
        </div>

        <div className='min-h-screen w-full'></div>
      </main>
    </>
  )
}
