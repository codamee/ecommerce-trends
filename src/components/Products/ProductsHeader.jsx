import { BeatLoader } from "react-spinners"


const ProductsHeader = (props) => {
    const { sortByOptions, activeOptionId, updateActiveOptionId } = props
    const onChangeOptionId = (event) => {
        updateActiveOptionId(event.target.value)
    }
    return (
        <div className="flex justify-between">
            <h1 className="text-2xl text-green-900 font-bold">All Products</h1>
            <div className="flex justify-center items-center gap-4">
                <p>&#8375;ortBy</p>
                <select value={activeOptionId} onChange={onChangeOptionId}>
                    {sortByOptions.map((obj) => {
                        return <option key={obj.optionId} value={obj.optionId}>{obj.displayText}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default ProductsHeader