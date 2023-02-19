import { styled, StyledText as NextUIText } from "@nextui-org/react";

const StyledText = styled(NextUIText, {
  fontFamily: 'inherit',
  color: "$textPrimary",
  fontSize: "calc($xs + $sm)",
  fontWeight: "$normal",
  letterSpacing: "$normal",
  paddingBottom: "$10",
  margin: 0,
  "@mdMax": {
    fontSize: "$xl",
    paddingBottom: "$10",
  },
  "@smMax": {
    fontSize: "$base",
    paddingBottom: "$md",
  },
});

export default StyledText;
