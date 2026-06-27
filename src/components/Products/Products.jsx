import ProductsCard from "./ProductsCard"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

const Products = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const apiUrl = 'https://apis.ccbp.in/products'
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      setProductList(data.products)
      console.log(productList)
    }
    getProducts()
  }, [])
  console.log(productList)

  return (
    <div className='container w-ful m-auto p-10 bg-green-00'>
      <h1 className="text-3xl text-green-800  font-bold">All Products</h1>
      <ul className="py-10 grid grid-cols-3 gap-x-8 gap-y-10">
        {
          productList.map((productInfo) => {
            return <ProductsCard key={productInfo.id} productInfo={productInfo} />
          })
        }
      </ul>
    </div>
  )
}

export default Products