import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100vw;
height: 100vh;

background-color: #20223F;

    h1{
        font-size: 64px;
        line-height: 72px;
        color: #C4C4C4; 
    }
    h2{
        font-size: 15px;
        line-height: 17px;
        color: #C4C4C4;
    }

    @media (min-width: 700px){
    
    h1 {
        font-size: 80px;
    }
    h2 {
        font-size: 18px;
        margin-top: 4px;
    }
}
`
export default Container