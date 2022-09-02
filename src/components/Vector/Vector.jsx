import { styled } from "@nextui-org/react";
import useMediaQuery from "../../hooks/useMediaQuery";

const StyledSvg = styled("svg", {});

const Vector = ({ type, css = {} }) => {
  const isSmallDevice = useMediaQuery("(max-width: 960px)");
  return (
    <>
      {type === "StackedPeaks" && isSmallDevice ? (
        <StyledSvg
          css={css}
          xmlns='http://www.w3.org/2000/svg'
          width='1000'
          height='1860'
          version='1.1'
          viewBox='0 0 1000 1860'
        >
          <path fill='#001220' d='M0 224l167-56 166 75 167-75 167-18 166 56 167-19V0H0z'></path>
          <path
            fill='#031a2c'
            d='M0 578l167-93 166-19 167-56 167-18 166 186 167-56V185l-167 19-166-56-167 18-167 75-166-75L0 222z'
          ></path>
          <path
            fill='#022138'
            d='M0 1005l167-37 166 19 167-112 167 93 166 130 167-241V520l-167 56-166-186-167 18-167 56-166 19L0 576z'
          ></path>
          <path
            fill='#022138'
            d='M0 1433l167 37 166-74 167 19 167 74 166-37 167-56V855l-167 241-166-130-167-93-167 112-166-19-167 37z'
          ></path>
          <path
            fill='#031a2c'
            d='M0 1656l167-37 166-18 167-56 167 74 166 37 167-37v-225l-167 56-166 37-167-74-167-19-166 74-167-37z'
          ></path>
          <path
            fill='#001220'
            d='M0 1861h1000v-244l-167 37-166-37-167-74-167 56-166 18-167 37z'
          ></path>
        </StyledSvg>
      ) : (
        <StyledSvg
          css={css}
          xmlns='http://www.w3.org/2000/svg'
          width='1920'
          height='1080'
          version='1.1'
          viewBox='0 0 1920 1080'
        >
          <path fill='#001220' d='M0 131l320-33 320 43 320-43 320-11 320 33 320-11V0H0z'></path>
          <path
            fill='#031a2c'
            d='M0 336l320-54 320-11 320-32 320-11 320 108 320-33V107l-320 11-320-33-320 11-320 43-320-43L0 129z'
          ></path>
          <path
            fill='#022138'
            d='M0 584l320-21 320 10 320-64 320 54 320 75 320-140V301l-320 33-320-108-320 11-320 32-320 11L0 334z'
          ></path>
          <path
            fill='#022138'
            d='M0 833l320 21 320-43 320 11 320 43 320-22 320-32V496l-320 140-320-75-320-54-320 64-320-10L0 582z'
          ></path>
          <path
            fill='#031a2c'
            d='M0 962l320-21 320-11 320-33 320 44 320 21 320-21V809l-320 32-320 22-320-43-320-11-320 43L0 831z'
          ></path>
          <path
            fill='#001220'
            d='M0 1081h1920V939l-320 21-320-21-320-44-320 33-320 11L0 960z'
          ></path>
        </StyledSvg>
      )}
    </>
  );
};

export default Vector;
