import styled from "styled-components"
import ProductItems from "./ProductItems"
import Filter from "./Filter"
// import { useDispatch, useSelector } from "react-redux"
import { useEffect,useContext} from "react"
// import { setProducts } from "../redux/actions/productActions"
import notecontext from "../context/productcontext"


const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 padding: 10px;
 `



const Productlist = styled.div`
  display: flex;`


const ProductsPage = () => {
 
  const context = useContext(notecontext);
  const { fetchProduct, products }=context;
  useEffect(() => {
    fetchProduct();
  }, [])
  console.log("products:", products)

  return (
    <Productlist>


      <Container>


        <ProductItems products={products}/>


      </Container>

    </Productlist>
  )
}

export default ProductsPage;
 // const dispatch = useDispatch()
  // const products = useSelector((state) => state.allProducts.products)

  // const fetchProduct = async () => {
  //   const response = await fetch("http://localhost:5000/api/product/getproduct/6226fde26b0a988d54431a0e", {
  //     // Default options are marked with *
  //     method: "GET",
  //     headers: {  
  //       'Content-Type': 'application/json',
  //       'auth-token':
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjZmZGUyNmIwYTk4OGQ1NDQzMWEwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcyMjg2MX0.WAGcIIGXWoGeV05Z_QJfPRKk7t5VK39yOxcnEiThu0Y"

  //     }


  //   });
  //   const json = await response.json()
  //   dispatch(setProducts(json))


  // }