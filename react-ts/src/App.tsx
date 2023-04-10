import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { addProduct, deleteProduct, getAllProduct, updateProduct, GetAllCategory, CreatCategory, removeCategory } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import Login from './pages/admin/login/Login'
import Register from './pages/admin/register/Register'
import AddCategory from './pages/admin/Category/AddCategory'
import CategoryManagement from './pages/admin/Category/CategoryManagement'


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [category, setcategory] = useState([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [products])
  useEffect(() => {
    GetAllCategory().then(({ data }) => setcategory(data))
  }, [])
  const RemoveCategory = (id: any) => {
    if (confirm("Are you sure you want to remove this")) {
      removeCategory(id).then(() => setcategory(category.filter((data: any) => data._id !== id)))
      toast.error("Xóa Thành công!")
    }
  }
  const AddList = async (data1: any) => {
    const { data } = await CreatCategory(data1);
    toast.success(data.message);
  }
  const onHandleRemove = (_id: string) => {
    deleteProduct(_id).then(() => setProducts(products.filter((item: any) => item._id !== _id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        CategoryManagement
        <Route path='Category' element={<AddCategory Onadd={AddList} />}  ></Route>
        <Route path='Show/Category' element={<CategoryManagement data={category} OnRemove={RemoveCategory} />}  ></Route>
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/register' element={<Register />} />
        <Route path='/admin'>
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
