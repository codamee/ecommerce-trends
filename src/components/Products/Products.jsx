import ProductsCard from "./ProductsCard"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { ClipLoader } from "react-spinners"
import ProductsHeader from "./ProductsHeader"
const sortByOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: 'Price (High-Low)'
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)'
  }
]
const Products = () => {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeOptionId, setActiveOptionId] = useState(sortByOptions[0].optionId)
  const updateActiveOptionId = (e) => {
    setActiveOptionId(e)
  }

  useEffect(() => {
    const getProducts = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      setProductList(data.products)
      setIsLoading(false)
    }
    getProducts()
  }, [activeOptionId])

  const renderProducts = () => {
    return (
      <div className='container w-ful m-auto p-10 bg-green-00'>
        <ProductsHeader sortByOptions={sortByOptions} activeOptionId={activeOptionId} updateActiveOptionId={updateActiveOptionId} />
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
  const renderLoader = () => {
    return <div className="container mx-auto flex items-center justify-center">
      <ClipLoader color="green" size={500} />
    </div>
  }

  return <>{isLoading ? renderLoader() : renderProducts()}</>
}

export default Products