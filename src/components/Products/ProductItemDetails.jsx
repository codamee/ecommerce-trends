import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Cookies from "js-cookie"
import { BeatLoader } from "react-spinners"

const ProductItemDetails = () => {
    const { id } = useParams()
    const [productItemDetails, setProductItemDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(q => q + 1)
    }
    const decreaseQuantity = () => {
        setQuantity(q => q > 1 ? q - 1 : q)
    }

    useEffect(() => {
        const getProductItemDetails = async () => {
            const jwtToken = Cookies.get("jwt_token")
            const apiUrl = `https://apis.ccbp.in/products/${id}`
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            }
            const response = await fetch(apiUrl, options)
            if (response.ok) {
                const data = await response.json()
                const formattedData = {
                    availability: data.availability,
                    brand: data.brand,
                    description: data.description,
                    id: data.id,
                    imageUrl: data.image_url,
                    price: data.price,
                    rating: data.rating,
                    style: data.title,
                    reviews: data.total_reviews
                }
                setProductItemDetails({ ...formattedData, quantity })
                setIsLoading(false)
            }
        }
        getProductItemDetails()
    }, [id,quantity])


    const { availability, brand, description, imageUrl, price, rating, style, reviews } = productItemDetails
    console.log(productItemDetails)
    return (
        <>
            {isLoading ? <BeatLoader /> : <div className="container rounded flex gap-5 bg-green-50 mx-auto p-15">
                <img className="w-120 rounded-xl" src={imageUrl} alt={style} />
                <div className="flex flex-col p-2 justify-between items-stretch">
                    <h1 className="text-3xl font-semibold  text-green-950">{style}</h1>
                    <p className="font-semibold text-green-600 text-xl">Rs {price}/- </p>
                    <div className="flex items-center gap-5">
                        <div className=" flex gap-1 items-center text-white px-2 py-1 rounded bg-green-700 outline-none">
                            <p >{rating}</p>
                            <img className="w-6" src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" />
                        </div>
                        <p className="font-semibold">{reviews} <span className="text-black font-normal">reviews</span> </p>
                    </div>
                    <div>
                        {description}
                    </div>
                    <p className="font-semibold">Available : <span className="text-gray-500"> {availability}</span></p>
                    <p className="font-semibold">Brand : <span className="text-gray-500"> {brand}</span></p><hr />
                    <div className="flex gap-3">
                        <button className="bg-green-200 font-semibold px-3 py-1 rounded" onClick={decreaseQuantity}> - </button>
                        <p className=" py-1 w-10 bg-green-200 flex items-center justify-center rounded font-bold">{quantity}</p>
                        <button className="bg-green-200 font-semibold px-3 py-1 rounded" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="cursor-pointer w-fit bg-green-500 px-4 py-2 rounded text-white ">Add To Cart</button>
                </div>
            </div>}
        </>

    )
}

export default ProductItemDetails