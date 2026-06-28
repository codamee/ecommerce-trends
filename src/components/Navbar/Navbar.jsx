import Cookies from "js-cookie"
import { useNavigate, Link } from "react-router"

const Navbar = () => {
  const navigate = useNavigate()
  const onLogOutClick = () => {
    Cookies.remove("jwt_token")
    navigate('/login', { replace: true })
  }

  return (
    <div className='p-10 flex items-center justify-between container mx-auto sticky top-0 bg-white'>
      <div className='font-bold text-3xl w-1/2'>
        <p className='text-3xl'>&#8376;rend&#8368;</p>
      </div>
      <div className='flex w-1/3 justify-between items-center ' >
        <ul className='flex justify-between items-center w-2/3'>
          <Link to='/'>
            <li className='cursor-pointer hover:border-b p-2 border border-transparent hover:border-b-black transition-all duration-500 ease-in-out'>Home</li>
          </Link>
          <Link to='/products'>
            <li className='cursor-pointer hover:border-b p-2 border border-transparent hover:border-b-black transition-all duration-500 ease-in-out'>Products</li>
          </Link>
          <Link to='/cart'>
            <li className='cursor-pointer hover:border-b p-2 border border-transparent hover:border-b-black transition-all duration-500 ease-in-out'>Cart</li>
          </Link>

        </ul>
        <button onClick={onLogOutClick} className='cursor-pointer text-white px-4 py-2 rounded bg-green-500 outline-none  hover:bg-green-400'>Log out</button>
      </div>
    </div>
  )
}

export default Navbar