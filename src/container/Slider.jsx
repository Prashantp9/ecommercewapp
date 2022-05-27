
  import styled from "styled-components";
  import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
  import Categories from "./Categories";
  import { mobile } from "../Responsive"
  import StyleProducts from "./StyleProducts"


  const Searchcontainer = styled.div` 
    ${mobile({height: "4vh" })}
    display: flex;
    height: 5vh;
    align-items: center;
    background-color: #e5e5e5;

  `;

  const Inputcontainer = styled.div`
    ${mobile({
      height: "22px",width: "60%" , margin: "0 0 0 60px",
      })}
    display: flex;
    height: 4vh;
    width: 30%;
    border-radius: 4px;
    border: 1px solid gray;
    opacity: 0.5;
    justify-content: center;
    margin-left: 450px; ;
  `;

  const Container = styled.div`
    ${mobile({height:"30vh",width:"100%",flexDirection:"column"})}
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #e5e5e5;
    position: relative;
  `;

  

  

  const Slide = styled.div`
  ${mobile({height:"30vh",width:"100vw",})}
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
  `;

  const ImgContainer = styled.div`
  ${mobile({height:"100%"})}
    display: flex;
    height: 100%;
    flex: 1;
  `;

  const Image = styled.img`
  ${mobile({height:"176px",marginTop: "5px"})}
    height: 80%;
  `;

  const InfoContainer = styled.div`
  ${mobile({height: "100%",width: "30%",padding: "6px"})}
    padding: 50px;
  `;

  const Title = styled.h1`
  ${mobile({fontSize: "12px"})}
    font-size: 70px;
  `;

  const Desc = styled.p`
  ${mobile({fontSize: "10px",margin: "0px"})}
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  `;


 const Searchlogo = styled.label`
   ${mobile({})}`


  const Slider = () => {

 


    return (
      <div>
        <Searchcontainer>
          <Inputcontainer>
            <input type="text" className="navinput" style={{ width: " 100%" }} />
            <Searchlogo>
            <SearchOutlinedIcon
              style={{ color: "black", cursor: "pointer"}}
              className="mx-1"
            />
            </Searchlogo>
          </Inputcontainer>
        </Searchcontainer>
        <Container>
         
          
              <Slide bg={"rgb(240,240,240)"}>
                <ImgContainer>
                  <Image src="https://images.unsplash.com/photo-1604742763104-86a0cf0aa1c2?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=formatfit=cropw=2070q=80" />
                </ImgContainer>
                <InfoContainer>
                  <Title>Quick delivery</Title>
                  <Desc>get quick delivery from the near by store at lowest prices from stormanger, shop and save on groceries and household items </Desc>
                  
                </InfoContainer>
              </Slide>
            
         
        </Container>
        <Categories />
        <StyleProducts/>
      </div>
    );
  };

  export default Slider;
