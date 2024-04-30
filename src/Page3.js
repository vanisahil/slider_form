// Page1.js
import React from 'react';
import logo from './image/Cat-N-Dog-Logo copy.png';
import appstore from './image/AppStoreBadge.png';
import playstore from "./image/google-play-badge.png";
import hero from "./image/page2.png";
// import Contact from "./Contact.js"


const Page3 = ({ imageUrl }) => {
  // const [showContact, setShowContact] = useState(false);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     // After 3 seconds, set showContact to true
  //     setShowContact(true);
  //   }, 2000);

  //   // Cleanup function to clear the timeout in case the component unmounts
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  // if (showContact === true) {
  return (<>

    <div className='w-screen h-screen bg-[#FDE3D9] relative opacity-50'>

      <nav className='  w-screen h-16 flex   justify-between items-center'>
        <img className='' src={logo} alt='logo'></img>

      </nav>
      <div className='ml-10 mt-32 '>
        <h1 className='font-bolder text-4xl '>Lorem Ipsum is simply <br /> dummy text of the printing <br /> and typesetting industry.</h1>
        <h1 className='opacity-50 mt-8 text-[#6D6D6D]'>
          Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book.
        </h1>
        <div className='flex justify-start  items-center  w-2/5 mt-24 ' >
          <img className='w-34 h-11 mr-8 ' src={appstore} alt=''></img>
          <img className='w-36 h-16  ' src={playstore} alt=''></img>
        </div>
        <div>
          <img className='absolute h-screen top-0 right-0 w-[50%] object-cover' src={hero}></img>
          <ul className='flex text-[#fefdfd] cursor-pointer text-xs absolute mt-6 top-0 right-0'>
            <li className='mr-8'>About</li>
            <li className='mr-8'>blog</li>
            <li className='mr-8'>Careers</li>
            <li className='mr-8 '>Contact</li>
          </ul>



        </div>


      </div>

    </div>
    <div className='w-[25%] h-[45%] bg-[#FCEBE5] rounded-md absolute top-[35%] left-[35%] n drop-shadow-xl p-4'>
      <h1 className='text-3xl font-medium'>Contact</h1>
      <p className='text-xs'>Lorem Ipsum has been the industry's </p>
      <div className='mt-4 '>

        <input className='mb-2 w-full  rounded-lg p-2' placeholder='Name'></input>
        <input className='mb-2  w-full rounded-lg p-2' placeholder='Email'></input>
        <input className='mb-2  w-full rounded-lg p-2' placeholder='Message'></input>
        <button className='rounded-lg bg-black text-white absolute bottom-2 left-20'>Submit</button>

      </div>


    </div>
  </>
  );
};
// };

export default Page3;
