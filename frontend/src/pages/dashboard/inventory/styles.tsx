import { styled } from "@mui/material";
import { colors } from "../../../style/colors";

export const IdentityWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  borderRadius: "16px",
  background: theme.palette.mode === "light" ? colors.white : colors.gray700,
  padding: "16px",
  maxWidth: "fit-content",
  height: "fit-content",
  margin: "8px",
}));

export const ResourcesWrapper = styled("div")(() => ({
  display: "flex",
  "> div": {
    margin: "8px"
  }
}));

export const LoadingWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

