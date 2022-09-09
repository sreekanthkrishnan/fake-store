import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { apiConfig } from "../../axiosConfig";
import { setProducts } from "../../redux/actions/productActions";
import { Context } from "../context/Store";
import Header from "../general/components/Header";
import ProductListPage from "./ProductListPage";

function ProductPage() {
    // const { state, dispatch } = useContext(Context);
    const dispatch = useDispatch();
    const fetchProductData = () => {
        apiConfig.get("products").then((res) => {
            const { status, data } = res;
            if (status === 200) {
                // console.log(data);
                dispatch(setProducts(data));
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
