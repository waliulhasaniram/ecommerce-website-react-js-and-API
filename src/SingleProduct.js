import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import MyImage from "./components/MyImage";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";


const SingleProduct=()=>{

  const {getSingleProducts, isSingleLoading, singleProduct} = useProductContext(); //getting everything from custom hook (useContext)

  const {id} = useParams(); // getting id of the singleProduct using useParams

  const { id:productID, name, company, description, stock, price, category, reviews, stars, image} = singleProduct;

  useEffect(()=>{
    getSingleProducts(`${API}?id=${id}`);
  }, [])

  if(isSingleLoading){
    return <div className="page_loading">...Loading</div>
  }
  
  return (<Wrapper>
    <PageNavigation title={name}/>
    <Container className="container">
      <div className="grid grid-two-column">

        <div className="product_images">
          <MyImage imgs={image}/>
        </div>

        <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            <p>{stars}</p>
            <p>{reviews}</p>
            <p className="product-data-price">
               <del> {Intl.NumberFormat("BDT", {style: "currency", currency: "BDT", maximumFractionDigits: 2} ).format(price/100)}</del>
            </p>
            <p className="product-data-price product-data-real-price">
                Special Price: {Intl.NumberFormat("BDT", {style: "currency", currency: "BDT", maximumFractionDigits: 2} ).format((price/100)-100)}
            </p>
            <p>{description}</p> 

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon"/>
                  <p>Super fast delivery</p>
              </div>
              <div className="product-warranty-data">
                  <TbReplace className="warranty-icon"/>
                  <p>Super fast replacement</p>
              </div>
              <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon"/>
                  <p>super pretected security</p>
              </div>
              <div className="product-warranty-data">
                  <GiReceiveMoney className="warranty-icon"/>
                  <p>Get your money back anytime</p>
              </div>
            </div>

            <div className="product-data-info">
               <span>Available : {stock > 0 ? "In Stock" : "Not Available"}</span>
               <p>ID : <span>{id}</span> </p>
               <p> company : <span>{company}</span> </p>
            </div>
            <hr/>
            {stock > 0 && <AddToCart singleProduct={singleProduct} />}
        </div>

      </div>

    </Container>
    
    </Wrapper>);
}



const Wrapper = styled.section`
height: 100%;
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
