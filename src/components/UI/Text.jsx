import { styled, StyledText as NextUIText } from "@nextui-org/react";

const StyledText = styled(NextUIText, {
  color: "$textPrimary",
  fontSize: "calc($tiny + $xs)",
  fontWeight: "$normal",
  letterSpacing: "$normal",
  paddingBottom: "$10",
  margin: 0,
  "@mdMax": {
    fontSize: "calc($lg - $base)",
    paddingBottom: "$10",
  },
  "@smMax": {
    fontSize: "$base",
    paddingBottom: "$md",
  },
});

export default StyledText;
