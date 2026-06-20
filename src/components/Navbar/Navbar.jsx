import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className='p-10 flex items-center justify-between '>
      <div className='font-bold text-3xl w-1/2'>
        <p className='text-3xl'>&#8355;rend&#8368;</p>
      </div>
      <div className='flex w-1/3  font-bold justify-between items-center ' >
        <ul className='flex justify-between items-center w-2/3'>
          <Link to='/'>
            <li className='cursor-pointer'>Home</li>
          </Link>
          <Link to='/products'>
            <li className='cursor-pointer'>Products</li>
          </Link>
          <Link to='/cart'>
            <li className='cursor-pointer'>Cart</li>
          </Link>

        </ul>
        <button className='cursor-pointer text-white px-4 py-2 rounded bg-green-500 outline-none'>Log out</button>
      </div>
    </div>
  )
}

export default Navbar