import Cookies from 'js-cookie'
import { Link, Navigate } from "react-router"

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to='/login' />
  }
  return (
    <div className="container  m-auto">
      <div className="flex py-20 px-10 gap-6 justify-between">
        <div className="flex w-1/2 flex-col gap-10 items-start">
          <h1 className="text-5xl font-bold text-green-700">Clothes That Gets You Noticed</h1>
          <p className="text-[1.2rem] ">Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.
          </p>
          <Link to={"/products"}>
            <button className="outline-none bg-green-500 cursor-pointer text-white font-semibold px-4 py-2 rounded">Shop Now</button>
          </Link>
        </div>
        <div className="flex justify-end items-center w-1/2">
          <img className="w-3/4 " src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="homeImg" />
        </div>
      </div>
    </div>
  )
}

export default Home