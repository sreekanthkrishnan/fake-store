import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../context/Store";

function ProductSinglePage() {
    const { id } = useParams();
    const { state } = useContext(Context);
    const products = state.products;
    const [item, setItem] = useState("");
    console.log(products, id, item);

    useEffect(() => {
        setItem(products?.filter((item) => item.id == id)[0]);
    }, [id, products]);

    return (
        <Container>
            <LeftContainer>
                <img src={item?.image} alt="Product image" />
            </LeftContainer>
            <RightContainer>
                <ProductName>{item?.title}</ProductName>
                <ProductDescription>{item?.title}</ProductDescription>
                <Rating>Rating : {item?.rating?.rate}</Rating>
                <Price>$ {item?.price}</Price>
                <BuyNow>Buynow</BuyNow>
            </RightContainer>
        </Container>
    );
}

export default ProductSinglePage;
const Container = styled.div`
    padding-top: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const LeftContainer = styled.div`
    padding: 0 50px;
    img {
        display: block;
        width: 100%;
        max-height: 60vh;
        object-fit: contain;
    }
`;
const RightContainer = styled.div``;
const ProductName = styled.h3``;
const ProductDescription = styled.p``;
const Price = styled.p`
    margin-top: 30px;
    font-size: 36px;
`;
const Rating = styled.p`
    margin-top: 10px;
    font-size: 20px;
`;
const BuyNow = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    margin-top: 50px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
