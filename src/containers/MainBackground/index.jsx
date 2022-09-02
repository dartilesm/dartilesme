import { styled } from "@nextui-org/react";
import { forwardRef } from "react";

const StyledBackground = styled("div", {
  position: "absolute",
  left: "0",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  variants: {
    sticky: {
      true: {
        "& div": {
          position: "fixed",
        },
      },
    },
  },
  "& div": {
    position: "absolute",
    height: "calc(100vh + 500px)",
    top: "100px",
    width: "80%",
    background:
      "radial-gradient(ellipse at 20% 50%, rgb(60 28 75) 0%, transparent 70%, transparent 100%)",
    "@mdMax": {
      background:
        "radial-gradient(ellipse at 20% 50%, rgb(60 28 75) 0%, transparent 68%, transparent 100%)",
    },
    "@smMax": {
      background:
        "radial-gradient(ellipse at 30% 50%, rgb(60 28 75) 0%, transparent 70%, transparent 100%)",
    },
    "@xsMax": {
      background:
        "radial-gradient(ellipse at 0% 50%, rgb(60 28 75) 0%, transparent 70%, transparent 100%)",
    },
  },
});

const StyledSvg = styled("svg", {
  position: "absolute",
  height: "80vh",
  "@smMax": {
    height: "60vh",
  },
  variants: {
    position: {
      left: {        
        left: "-150px",
        bottom: "-200px",
      },
      right: {
        right: "-150px",
        top: "-270px",
      }
    }
  }
})

const MainBackground = forwardRef(({ sticky }, ref) => (
  <StyledBackground ref={ref} sticky={sticky}>
    <StyledSvg position="left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#021a2e" d="M41.4,-54.4C56.9,-45.7,75,-38,79.9,-25.4C84.8,-12.8,76.5,4.7,68,19.3C59.4,34,50.6,45.7,39.2,55.2C27.9,64.7,13.9,71.9,-1.1,73.4C-16.2,74.9,-32.3,70.8,-45.5,61.9C-58.7,53,-68.9,39.4,-73,24.3C-77,9.3,-74.8,-7.1,-69.3,-22C-63.8,-36.9,-55,-50.3,-42.9,-60C-30.8,-69.8,-15.4,-75.9,-1.2,-74.2C13,-72.5,25.9,-63,41.4,-54.4Z" transform="translate(100 100)" />
    </StyledSvg>
    <StyledSvg position="right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#021a2e" d="M45.2,-70.1C59,-61.4,71.1,-49.7,78.5,-35.3C85.9,-20.9,88.7,-3.9,87.3,13.2C85.9,30.4,80.3,47.6,69.7,61.2C59.1,74.7,43.5,84.7,27.4,86.3C11.3,87.8,-5.3,81,-21.4,75.2C-37.6,69.4,-53.4,64.7,-60.3,53.9C-67.2,43,-65.2,26,-68,9.5C-70.9,-7.1,-78.5,-23.2,-75,-35.6C-71.4,-48,-56.7,-56.6,-42.3,-65.1C-27.9,-73.6,-14,-82,0.8,-83.4C15.7,-84.7,31.3,-78.9,45.2,-70.1Z" transform="translate(100 100)" />
    </StyledSvg>
    {/* <div></div> */}
  </StyledBackground>
));

export default MainBackground;
