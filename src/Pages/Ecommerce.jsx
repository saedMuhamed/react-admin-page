import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {Stacked , Pie , Button, SparkLine} from '../components'
import {useStateContext} from '../contexts/ContextProvider'
import {earningData, SparkLineAreaData, ecomPieChartData} from '../Assets/data/dummy';

const Ecommerce = ()  => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
           <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl 
                           w-full lg:w-80 lg:80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center mr-80 '>
            <div>
              <p className='font-bold text-gray-500'>Earnings
              </p>
              <p className='text-2xl text-gray-600'>
                $102,301.244
              </p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
            color='white'
            bgColor='blue'
            text='Download'
            borderRadius='10px'
            size='md' />
          
          </div>
           </div>
      </div>
            <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
             {earningData.map((item) => (
               <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-12 rounded-xl'>
                 <button type='button' style={{color : item.iconColor, backgroundColor: item.iconBg}} className="hover:shadow-xl  rounded-full text-2xl p-4 opicity-0.9">
                       {item.icon}
                 </button>
                 <p className='mt-3'> <span className='text-lg font-semibold'>
                   {item.amount} </span> <span className={`text-sm text-${item.pcColor} ml-2`}> {item.percentage} </span></p>
                   <p className='text-sm text-gray-700 mt-2'>{item.title}</p>
                 </div>
             ))}
            </div>
    </div>
  
  )
}

export default Ecommerce