import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai"

export default function Home() {
  return (
    <div>
      <Head>
        <title>rekabs repo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-10'>
        <section className='min-h-screen'>
          <div className='relative mx-auto bg-gradient-to-r from-fuchsia-700 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <img src={'https://www.rekabs.com/wp-content/uploads/2023/02/rekabschar.png'} />
          </div>
          <div className='text-center p-10 font-Futura_PT'>
            <h2 className='text-5xl py-2 text-fuchsia-700 font-medium md:text-6xl'>Brian Baker</h2>
            <h3 className='text-2xl py-2 text-violet-600 font-medium font-mono md:text-3xl'>I React.</h3>
            <p className=' text-md py-5 leading-8 text-zinc-800 md:text-xl max-w-xl mx-auto'>Purpose driven people leader.  I believe intentional outcomes are grown from sustainably repeatable behaviors.  I also like lawns.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-violet-600 md:text-8xl'>
            <Link target="_blank" href="https://github.com/rekabs">
              <AiFillGithub />
            </Link>

            <Link target="_blank" href="https://www.instagram.com/bjrekab/">
              <AiFillInstagram />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/brian-baker-15295a1a/">
              <AiFillLinkedin />
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
};
