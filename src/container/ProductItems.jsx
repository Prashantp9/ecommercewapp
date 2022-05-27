import styled from "styled-components";
import { Link } from "react-router-dom";
import Rate from "./Rate";
import { useEffect, useState, useContext} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/actions/productActions"
import notecontext from "../context/productcontext"


// const Container = styled.div`
//  flex: 1;
//  padding: 15px;
//  margin: 1px 1px 1px 5px;
//  width: 250px;
//  max-width: 250px;
//  height: 350px;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  flex-direction: column;
//  background-color: f0f0f0;
//  `
const Image = styled.img` 
    transition: transform .1s;
    height: 11rem;
     width: 11rem;
     margin: 15px ;
  &:hover{
  transform: scale(1.1);
  }
 `;

const Container = styled.div`
 margin: 4px;
`;

const Info = styled.div`
  padding: 10px;
`;
const Card = styled.div`
  margin-right: 36px ;
   width: 100%;
   height: 100%;
  
`;
const View = styled.div`
    font-family: 'Urbanist', sans-serif;
    display: flex ;
    justify-content:center;
    height: 27px;
    width:110px ;
    border:1px solid gray;
    margin-right: 5px;
    background-color:rgb(204,3,30) ;
    color: white ;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
    }
    `

const ProductItems =() => {
  // const products = useSelector((state)=> state.allProducts.products)
  const context = useContext(notecontext);
  const { fetchProduct, products }=context;
  useEffect(()=>{
    fetchProduct();
  },[])

 
  
    const  renderList  = products.map((product)=>{
      const {_id , title, img, price} = product
      return(
        <Container>
        <Card>
          <Image
            src={img}
            key={_id}
          />
  
          <Info>
           <p className="card-text">{title}</p>
            <h5>{price}</h5>
            <View>
        <Link to="/product" style={{textDecoration: "none",color: "white"}}><p>view product</p></Link>
      </View> 
          
          </Info>
        </Card>
      </Container>
      )
      })
     
   
   



    
  return (
    <>
    {renderList}
    </>
   
  );
};

export default ProductItems;
