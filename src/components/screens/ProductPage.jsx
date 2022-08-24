import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { apiConfig } from "../../axiosConfig";
import { Context } from "../context/Store";
import Header from "../general/components/Header";
import ProductListPage from "./ProductListPage";

function ProductPage() {
    const { state, dispatch } = useContext(Context);

    const fetchProductData = () => {
        apiConfig.get("products").then((res) => {
            const { status, data } = res;
            if (status === 200) {
                // console.log(data);
                dispatch({
                    type: "UPDATE_PRODUCTS",
                    products: data,
                });
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <Container>
            <ProductListPage />
        </Container>
    );
}

export default ProductPage;
const Container = styled.div`
    padding-top: 100px;
`;
