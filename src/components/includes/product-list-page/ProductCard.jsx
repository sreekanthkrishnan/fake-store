import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { truncateString } from "../../../helpers/functions";

function ProductCard({ product }) {
    return (
        <Container to={`/product/view/${product.id}`}>
            <ImageCard>
                <img src={product.image} alt="Product image" />
            </ImageCard>
            <ProductName>{truncateString(product.title, 30)}</ProductName>
            <Price>$ {product.price}</Price>
        </Container>
    );
}

export default ProductCard;
const Container = styled(Link)`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    background-color: #fff;
`;
const ImageCard = styled.div`
    img {
        display: block;
        background-color: #fff;
        width: 100%;
        max-height: 150px;
        object-fit: contain;
    }
    margin-bottom: 20px;
`;

const ProductName = styled.h4`
    font-style: 16px;
    font-weight: 400;
`;
const Price = styled.p`
    margin-top: 20px;
`;
