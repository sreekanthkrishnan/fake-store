import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { apiConfig } from "../../axiosConfig";
import { setProducts } from "../../redux/actions/productActions";
// import { updateCartItem } from "../../redux/productStore";
import Header from "../general/components/Header";
import ProductPage from "../screens/ProductPage";
import ProductSinglePage from "../screens/ProductSinglePage";

function AppRouter() {
    const dispatch = useDispatch();

    const fetchProductData = () => {
        apiConfig.get("products").then((res) => {
            const { status, data } = res;
            if (status === 200) {
                dispatch(setProducts(data));
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <Container>
            <Header />
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route
                    path="/product/view/:id"
                    element={<ProductSinglePage />}
                />
            </Routes>
        </Container>
    );
}

export default AppRouter;
const Container = styled.div``;
