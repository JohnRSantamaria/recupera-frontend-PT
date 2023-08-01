import Head from 'next/head'
import Layout from './components/Layout'
import ToDoApp from './components/ToDoApp'
import AnimatedText from './components/AnimatedText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Recupera | To Do APP</title>
        <meta
          name="description"
          content="Next.js developer portfolio Showcase your skills as a 
          full-stack developer and software engineer."
        />
      </Head>
      <main className='flex items-start justify-center text-dark w-full min-h-screen dark:text-light sm:items-start' >
        <Layout>
          <AnimatedText text="To Do App" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <ToDoApp />
        </Layout>
      </main>


    </>
  )
}
