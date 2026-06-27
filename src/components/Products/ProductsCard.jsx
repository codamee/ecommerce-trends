const ProductsCard = (props) => {
  const { productInfo } = props
  const { title, image_url, brand, price, rating } = productInfo
  return (
    <li className=" rounded shadow-2xl p-5 flex flex-col gap-2">
      <div>
        <img className="rounded" src={image_url} alt={title} />
      </div>
      <h1 className=" font-semibold text-[18px] text-green-950">{title}</h1>
      <p className="">{brand}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-green-500">Rs {price}/- </p>
        <div className=" flex gap-1 items-center text-white px-2 py-1 rounded bg-green-700 outline-none">
          <p >{rating}</p>
          <img className="w-6" src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" />
        </div>
      </div>

    </li>
  )
}

export default ProductsCard