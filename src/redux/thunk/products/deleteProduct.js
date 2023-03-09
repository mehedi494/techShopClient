
import { removeProduct } from './../../actions/productAction';
const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://techshop-server.vercel.app/product/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
        const data = await res.json()
        console.log(data)
        if (data.acknowledged) {
            dispatch(removeProduct(id));
        }
    }
}
export default deleteProduct;