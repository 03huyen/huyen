
import instance from "./instance";
interface IProduct {
    id: number,
    name: string,
    price: number
}
const getAllProduct = () => {
    return instance.get("/products");
}
const getOneProduct = (id: string) => {
    return instance.get('/products/' + id)
}
const deleteProduct = (_id: string) => {
    return instance.delete('/products/' + _id)
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const updateProduct = (product: IProduct) => {
    return instance.put('/products/' + product.id, product)
}
export { getAllProduct, getOneProduct, deleteProduct, addProduct, updateProduct }

export const GetAllCategory = () => {
    return instance.get("/Category");
}
export const CreatCategory = (data:any) => {
    return instance.post("/Category", data);
}
export const removeCategory = (id:any) => {
    return instance.delete("/Category/"+ id);
}
// //todo Login 
// export const RegisterUser = (data:any) => {
//     return instance.post("/signup", data);
// }
// export const loginUser = (data:any) => {
//     return instance.post("/Signin", data);
// }