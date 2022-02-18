import React from 'react'
import type { NextPage } from 'next'
import Typography, { TypographyHeader } from '../components/Typography'
import { AddCircleOutline, ArrowBack, ArrowForward, CheckmarkOutline, EnterOutline, LogoGithub, RefreshOutline, ReloadCircle, ReloadCircleOutline, Trash, TrashBinOutline, TrashOutline } from 'react-ionicons'

function ChangingText({ children }: any) {
  return <span className='border-b-4 px-2 title-up-down'>{children}...</span>
}

const Home: NextPage = () => {
const [index, setIndex] = React.useState(0)
  const questions = [
    'is',
    'if',
    'should',
    'makes',
    'does',
    'can'
  ]
  
  React.useEffect(() => {
    setInterval(() => {
      setIndex(i => questions.length == i+1 ? 0 : i+1)
    }, 5000)
  }, [])

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
        <div className='px-14 2xl:pr-0 py-20 lg:py-32 bg-black shadow-lg'>
          <TypographyHeader>
            What <ChangingText key='changing-text-comp'>{questions[index]}</ChangingText>?
          </TypographyHeader>
          <div className='w-full 2xl:w-4/5'>
            <Typography>
              <b>TestForms</b> provides a way to make tests management easier, faster and more secure.
              Created by a student, designed for teachers, made for students.
            </Typography>
          </div>
          <div className='flex mt-5'>
            <a className='rounded-sm block hover:-translate-y-0.5 shadow-primary-500/50 shadow-xl cursor-pointer bg-gradient-to-r from-primary-500 via-primary-compliment-400 to-primary-500 bg-[length:200%] bg-[position:99%_99%] px-6 py-2 text-lg transition-all ease-in-out hover:bg-[position:0%_0%] duration-500 hover:shadow-lg w-max text-white uppercase tracking-widest font-body'>
              <div className='flex items-center select-none text-sm'>
                <span>Join A Test</span> <EnterOutline cssClasses='ml-4 sm:ml-7' color='#fff' />
              </div>
            </a>
            <a className='ml-2.5 group rounded-sm px-2.5 hover:-translate-y-0.5 bg-green-500/25 hover:bg-green-500/40 relative transition-all duration-500 cursor-pointer border-2 border-secondary-400 flex items-center align-middle text-white uppercase shadow hover:shadow-lg tracking-widest font-body'>
              <ArrowForward cssClasses='absolute -rotate-45 -bottom-6 -left-3 h-4 w-4' color="#fff" width="1" height="1" />
              <p className='group-hover:font-bold absolute font-mono text-xs -bottom-11 -left-24 w-max select-none'>View this project</p>
              <div className='flex items-center justify-center'>
                <LogoGithub color='#fff' />
              </div>
            </a>
          </div>
        </div>
        <div className='flex items-center pt-32 pb-56 lg:pt-0 bg-black lg:pb-20'>
          <div className='relative mx-auto'>
          <div className='shadow-2xl shadow-primary-compliment-400 card-down h-56 w-48 rounded-xl bg-gradient-to-br from-primary-compliment-400 to-primary-500 absolute'>
            <p className='absolute top-2 left-3 text-black/40 tracking-wide font-medium select-none'>v.3.1a-UI</p>
          </div>
          <div className='shadow-2xl shadow-secondary-400 card-split h-56 w-48 rounded-xl bg-gradient-to-br from-secondary-compliment-400 to-secondary-500 relative'>
            <p className='absolute bottom-2 right-3 text-black/40 tracking-wide font-medium select-none'>TestForms</p>
          </div>
          </div>
        </div>
      </div>
      <div className='py-20 grid lg:grid-cols-2 bg-gray-900'>
        <div className='relative'>
          <div className='bg-white rounded-lg mx-auto shadow-md scale-75 lg:scale-100 px-32 lg:px-36 py-40 w-max relative bg-gradient-to-br from-indigo-400 to-purple-600'>
            <ReloadCircle cssClasses="w-1 h-1 animate-spin top-3 left-3 absolute" color="#fff"/>
            <div className='sbtn rounded-sm top-4 -right-6 select-none border-2 flex items-center align-middle border-red-400 bg-red-600/40 shadow-lg py-2 px-5 uppercase text-white text-lg tracking-widest w-max absolute'>
              <TrashOutline cssClasses='mr-4' color="#fff"/> Delete
            </div>
            <div className='sbtn opacity-0 animation-delay-1000 rounded-sm top-14 -right-4 border-2 select-none flex items-center align-middle border-secondary-400 bg-secondary-600/50 shadow-lg py-2 px-5 uppercase text-white text-lg tracking-widest w-max absolute'>
              <AddCircleOutline cssClasses='mr-4' color="#fff"/> Add New
            </div>
            <div className='sbtn opacity-0 animation-delay-2000 rounded-sm top-24 -right-22 border-2 select-none flex items-center align-middle border-primary-400 bg-primary-600/50 shadow-lg py-2 px-5 uppercase text-white text-lg tracking-widest w-max absolute'>
              <CheckmarkOutline cssClasses='mr-4' color="#fff"/> Submit
            </div>
            <div className='animation-delay-1000 go-in opacity-0 px-14 py-14 rounded-lg absolute bg-gradient-to-br from-rose-600 to-red-500 -bottom-5 -left-5'></div>
            <div className='cursor-pointer absolute bottom-10 right-0 text-xs px-2 rounded-lg text-purple-600' onClick={() => {
              prompt("Who's Joe?")
              alert("joe mama lmao")
            }}>???</div>
          </div>
        </div>
        <div className='px-10 pt-8 lg:pt-0'>
          <TypographyHeader>Easy as Pie UIs</TypographyHeader>
          <Typography className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt consequatur voluptatibus asperiores, dolorem fuga eveniet nam, sequi voluptate sapiente et voluptates, consequuntur recusandae nulla fugit quisquam nobis ipsa ut soluta!
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Home
