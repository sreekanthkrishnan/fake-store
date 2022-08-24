import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { apiConfig } from "../../axiosConfig";
import { Context } from "../context/Store";
import Header from "../general/components/Header";
import ProductPage from "../screens/ProductPage";
import ProductSinglePage from "../screens/ProductSinglePage";

function AppRouter() {
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
