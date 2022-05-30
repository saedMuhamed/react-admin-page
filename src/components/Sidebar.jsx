import React from 'react';
import {Link , NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {  useStateContext } from '../contexts/ContextProvider';
import {links} from '../Assets/data/dummy';


const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize} = (useStateContext); 
  const handleClose = () => {
    if(setActiveMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 rounded-md shadow-lg shadow-zinc-500/50 text-lime-500 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-white text-md text-gray-600 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<><div className="flex justify-between items-center">
        <Link to="/" onClick={handleClose} className="item-center gap-4 ml-4 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900">
          <SiShopware className='mt-1'/><span> Dukaan </span>
             </Link>
             <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' onClick={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-lime-200 mt-6 mr-2 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
      </div>
      </> )}
      <div className='mt-8'>
            {links.map((item) => (
               <div key={item.title} >
                <p className='text-lime-500 m-2 mt-2  '>
                   {item.title}
                </p>
                {item.links.map((link) =>
                <NavLink  to={`/${link.name}`} key={link.name}
                onClick={handleClose} className={({isActive})=> isActive ? activeLink : normalLink}>
                   {link.icon}
                   <span className='capitalize'>
                   {link.name}
                   </span>
                </NavLink>
               
                )}
               </div>
           ))}
     </div>
       </div>  
  )
}

export default Sidebar