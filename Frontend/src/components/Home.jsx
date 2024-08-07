import logo from '../assets/logo.png'
import wave from '../assets/wave.svg'
import Navbar from './common/Navbar'
export default function Home() { 
  return (
    
    <div className="h-screen bg-lime-100 overflow-y-auto">
    <Navbar/>
    <div className="flex pt-20">
    <div className="w-full md:w-2/3 flex flex-col mx-10">
    <h1 className=' text-3xl font-bold font-mono py-3'>Only Pans</h1>
    <p className=' text-lg font-medium'>Welcome to Onlypans, a dynamic platform where food enthusiasts can share their favorite recipes and discover new culinary delights. Whether you&apos;re a seasoned chef or a home cook, Onlypans offers a community to showcase your creations and find inspiration from others. Join us and explore a world of delicious possibilities!</p>
    <button className='p-2 rounded-xl bg-lime-500 my-5 text-xl font-semibold'>Share Your Culinary Masterpiece</button>
    </div>
    <div className="hidden md:flex w-0 md:w-1/3 mx-20 my-5">
    <img src={logo} alt="Logo" className=''/>
    </div>
    
    </div>
    <img src={wave} alt="Logo" className=""/>
    </div>
  )
}
