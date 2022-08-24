import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../context/Store";
import NavBar from "../includes/product-list-page/NavBar";
import ProductCard from "../includes/product-list-page/ProductCard";
import ReactPaginate from "react-paginate";

function ProductListPage() {
    const { state } = useContext(Context);
    const product = state.products;
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [itemOffset, setItemOffset] = useState(0);

    console.log(searchTerm, "search");
    const arraySearch = (array, keyword) => {
        const searchTerm = keyword.toLowerCase();
        return array.filter((value) => {
            return (
                value.title.toLowerCase().match(new RegExp(searchTerm, "g")) ||
                value.category
                    .toLowerCase()
                    .match(new RegExp(searchTerm, "g")) ||
                value.description
                    .toLowerCase()
                    .match(new RegExp(searchTerm, "g"))
            );
        });
    };

    useEffect(() => {
        // searchTerm && setCategory("");
        setItems(() => arraySearch(product, searchTerm));
    }, [searchTerm]);

    useEffect(() => {
        if (category === "") {
            setItems(product);
        } else if (category === "men") {
            setItems(
                product.filter((item) => item.category === "men's clothing")
            );
        } else if (category === "women") {
            setItems(
                product.filter((item) => item.category === "women's clothing")
            );
        } else if (category === "electronics") {
            setItems(product.filter((item) => item.category === "electronics"));
        } else if (category === "jewelery") {
            setItems(product.filter((item) => item.category === "jewelery"));
        } else {
            setItems(product);
        }
    }, [category, product]);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    console.log(currentItems, "curre");
    console.log(items, "items");

    return (
        <Container>
            <div>
                <NavBar
                    setCategory={setCategory}
                    category={category}
                    setSearchTerm={setSearchTerm}
                />
                <ProductContainer>
                    {currentItems?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </ProductContainer>
            </div>
            <Paginationsection>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </Paginationsection>
        </Container>
    );
}

export default ProductListPage;
const Container = styled.div`
    padding: 0px 50px;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ProductContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;
const Paginationsection = styled.div`
    margin: 30px;
    ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        max-width: 400px;
        text-decoration: none;
        list-style: none;
        margin: 0 auto;
    }
    li {
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        a {
            min-width: 30px;
        }
    }
`;
