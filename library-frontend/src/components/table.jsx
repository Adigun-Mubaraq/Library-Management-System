import React, { Fragment, useEffect, useState } from "react";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllBooks } from "../service/LibraryService";

function AppTable() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const { payload } = await getAllBooks();
      console.log("This is payload: ", payload);
    };

    fetchAllBooks();
  }, []);

  return (
    <Fragment>
      <Layout container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <PageTitle>Library Management System</PageTitle>
          </Grid>
        </Grid>
        {!data ? (
          <TableContainer component={Paper} sx={{ margin: "40px 0" }}>
            <Table sx={{ minWidth: 700 }} aria-label="sales-table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>N/A</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Author</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                  <StyledTableCell align="left">Last Updated</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!!data &&
                  data.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        <Stack
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                          gap={2}
                        >
                          <Avatar>H</Avatar>
                          {row.product}
                        </Stack>
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.sku}</StyledTableCell>
                      <StyledTableCell align="left">{row.qty}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.price}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.total}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        21 Apr, 2022, 12:42pm
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography
            variant="body2"
            textAlign="center"
            fontSize={14}
            fontWeight="600"
            my="160px"
          >
            Nothing to show. Try adding a book
          </Typography>
        )}
      </Layout>
    </Fragment>
  );
}

const Layout = styled(Grid)(({ theme }) => ({
  display: "block",
  padding: "40px 80px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 8px",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme, padding }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E5E5EA",
    color: "#8E8E93",
    fontSize: "12px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    fontFamily: "Poppins",
    fontWeight: "600",
    padding: `${padding}`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "Poppins",
    backgroundColor: "#FFFFFF",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    border: "1px solid #F2F2F7",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Fredoka",
  fontSize: "48px",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

export default AppTable;
