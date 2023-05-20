import React, { useState } from "react";
import { Box, Button, Grid, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../assets/logo.png";
import AddBookModal from "./modals/AddBookModal";

function Header() {
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  return (
    <HeaderBarContainer container>
      <HeaderBar>
        <Grid item xs={2}>
          <Box component="a" href="/">
            <img src={Logo} height="80px" width="80px" alt="Logo" />
          </Box>
        </Grid>
        <Grid item sm={2} display="flex" justifyContent="end" maxWidth="140px">
          <AddButton onClick={() => setShowAddBookModal(true)} fullWidth>
            Add a book
          </AddButton>
        </Grid>
      </HeaderBar>
      {showAddBookModal && (
        <AddBookModal onClose={() => setShowAddBookModal(false)} />
      )}
    </HeaderBarContainer>
  );
}

const HeaderBarContainer = styled(Grid)(({ theme }) => ({
  padding: "0 80px",
  boxShadow:
    "0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08)",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    padding: "0 8px",
  },
}));

const HeaderBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "48px",
  padding: "8px 0px 8px 0px !important",
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
});

const AddButton = styled(Button)({
  color: "#FFFFFF",
  backgroundColor: "#EF7721",
  padding: "8px 14px",
  maxWidth: "140px",
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "16px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#EF7721",
    boxShadow:
      "0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08)",
  },
});

export default Header;
