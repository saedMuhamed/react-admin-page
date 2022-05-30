import React , {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import { RiNotificationLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import saed from '../Assets/data/saed2.png';
import {useStateContext} from '../contexts/ContextProvider';
import {
  Carts,
  Chats,
  Notification,
  UserProfile
} from '.';

const NavButton = ({ title, color, dotColor, customFunc, icon}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc} 
    style={{color}}
    className="relative text-2xl rounded-full p-3 hover:bg-light-gray"
    > 
    <span style={{background:dotColor}} className="absolute inline-flex text-4xl rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    
    </button>
  </TooltipComponent>
)

const Navbar = ()  => {
  const {activeMenu, setActiveMenu, handleClick, setIsClicked, isClicked , screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    
   const handleSize = () => setScreenSize
   (window.innerWidth);
   window.addEventListener('resize', handleSize);
   handleSize();
   return () => window.removeEventListener('resize', handleSize);
 
 },  []); 

  useEffect  (()=> {
    if(screenSize <= 900){
      setActiveMenu (true);
    }else {
      setActiveMenu(false);
    }
  
  }, []);
  
  return (
    <div className='flex relative justify-between p-2 md:mx-6'>
        <NavButton title= "Menu" customFunc={(handleSize) => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue"  icon={<AiOutlineMenu />} />
         <div className='flex relative justify-between'>
        <NavButton title= "Search"  color="blue"  icon={<AiOutlineSearch />} /> </div>
    <div className='flex object-right-top'>
          <NavButton title= "Cart" customFunc={() => handleClick('cart')} color="blue"  icon={<FiShoppingCart />} />
          <div>
          <NavButton title= "Chat" customFunc={() => handleClick('chat')} dotColor="#03C9D7" color="blue"  icon={<BsChatLeft />} />   
            </div>
            <div>
          <NavButton title= "Notification" customFunc={() => handleClick('notification')} dotColor="#03C9D7" color="blue"  icon={<RiNotificationLine />} />   
            </div>
            <TooltipComponent title='Profile' position='bottomCenter'>
            <div className='flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('Profile')}>
              <img className='rounded-full w-10 h-10' src={saed} alt="AvartarImage"/> 
              <p>
                 <span className='text-gray-500 text text-14 '>
                   Hi
                 </span> {''}
                 <span className='text-lime-700 font-bold ml-1 text-14'>
                   Saed
                 </span>
              </p>
              <MdKeyboardArrowDown className='text-lime-700 font-bold ml-1 text-14' />
            </div>
            </TooltipComponent>
     {isClicked.cart && <Carts />}
    {isClicked.chat && <Chats />}
    {isClicked.notification && <Notification />}
    {isClicked.Profile && <UserProfile />}
    </div>  
      </div>
      
  )
}

export default Navbar