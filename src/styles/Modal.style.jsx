import styled from "styled-components";

export const ModalStyled = styled.div`
    width:500px;
    height:200px;
    background-color:#fff;
    z-index:100;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    border-radius:8px;
    border: 2px solid black;
    box-shadow: 0 0 40px #1948c9;
    animation: slideY 1.5s;    
    & p{
        font-weight:bold;
        font-size:1.6rem;
    }
    & svg{
        display:flex;
        justify-content:flex-end;
        position:absolute;
        top:5px;
        right:5px;
    }

    @keyframes slideY{
    from{
        transform: translateY(90px);
    }
    to{
        transform: translateY(0);
    }
}
`