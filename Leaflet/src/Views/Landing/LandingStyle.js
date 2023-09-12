import styled from "styled-components";
import { motion } from "framer-motion";


export const LogInDiv = styled(motion.div)`
width: fit-content;
color: #354A21;
background-color: white;
border: 1px solid white;
border-radius: 10px;
padding: 10px;
cursor: pointer;
z-index: 500;
transition: 1s;
font-weight: 500;
font-size: 20px;

position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
:hover{
background-color: white;
color: #354A21;
}



`;


export const MainLandingDiv = styled(motion.div)`
color: rgba(188,188,188);
width: 100vw;
height: 100vh;
overflow: hidden;
  .photo1 {
    position: relative;
    top: 10%;
    right: -10%;
    width: 90%;
    @media (max-width: 430px) {
      width: 150%;
    }
  }
    .photo2{
    position: relative;
    bottom: -25%;
    left: 100%;
    width: 90%;
    @media (max-width: 430px) {
      width: 150%;
      bottom: -45%;
      left: 100%;
    }
  }
  .photo3 {
    position: relative;
    bottom: -50%;
    left: 0%;
    width: 60%;
    @media (max-width: 430px) {
      width: 100%;
      bottom: -15%;
      left: 0%;
    }
  }
  .photo5 {
    position: relative;
    top: -60%;
    left: 150%;
    width: 80%;
    @media (max-width: 430px) {
      top: 35%;
      left: 0%;
      width: 150%;
    }
  }
  .photo6 {
    position: relative;
    top: 30%;
    left: 40%;
    width: 100%;
    @media (max-width: 430px) {
      top: 30%;
    left: 40%;
    width: 200%;
    }
  }
  .photo7 {
    position: relative;
    top:20%;
    left: -140%;
    width: 66%;
    @media (max-width: 430px) {
    top:20%;
    left: -140%;
    width: 100%;
    }
  }
  .photo8 {
    position: relative;
    bottom: -10%;
    right: 140%;
    width: 60%;
    @media (max-width: 430px) {
    border: 1px solid blue;
    bottom: -30%;
    left: 75%;
    width: 170%;
    }
  }
`;

