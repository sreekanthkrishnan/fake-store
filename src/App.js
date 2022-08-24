import styled from "styled-components";
import AppRouter from "./components/routers/AppRouter";
import "./assets/css/style.css";

function App() {
    return (
        <Container className="App">
            <AppRouter />
        </Container>
    );
}

export default App;

const Container = styled.div``;
