
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import { FcHome } from "react-icons/fc";

import Calculator from '../../components/Calculator';
import Activity from '../../components/Activity';

const LandingPage = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showActivity, setShowActivity] = useState(false);


  const showComponent = (componentName) => {
    switch (componentName) {
      case "calculator":
        setShowCalculator(!showCalculator);
        setShowActivity(false);
        break;
      case "activity":
        setShowActivity(!showActivity);
        setShowCalculator(false);
        break;
      default:
        break;
    }
  }
  return (<div className={darkMode ? "dark" : ""}>
    <Head>
      <title>Mintu Kumar Portfolio</title>
      <meta name="description" content="Projects" />
      <link rel="icon" href="/favicon-n.ico" type="image/x-icon" />
    </Head>
    <div className='bg-white px-10 h-screen w-screen dark:bg-gray-800'>

      <section>
        <nav className='py-10 mb-1 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white'>developedbyMKS</h1>
          <ul className='flex items-center gap-6'>
            <li>
              <Link href="/">
                <FcHome className='cursor-pointer' />
              </Link>
            </li>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer' color={darkMode ? 'white' : ""} />
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/1jqkeK_j7QOBdkJW97uUeNJPo67qmMO_o/view?usp=sharing' rel="noreferrer noopener" target="_blank">Resume</a>
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className='text-4xl mb-5 font-burtons dark:text-white'>Projects</h2>
        <div className='flex flex-wrap  m-5 gap-10'>
          <div className='shadow-lg rounded-md bg-white drop-shadow-lg p-3 font-bold hover:bg-gray-600 hover:text-white' onClick={() => showComponent('calculator')}>Calculator</div>
          <div className='shadow-lg rounded-md bg-white drop-shadow-lg p-3 font-bold hover:bg-sky-200' onClick={() => showComponent('activity')}>Find an Activity</div>
        </div>
      </section>

      <section className='flex justify-center p-10 h-max'>
        {showCalculator && <Calculator />}
        {showActivity && <Activity />}
      </section>
    </div>
  </div>)
}

export default LandingPage