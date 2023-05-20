import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Box, styled } from "@mui/system";
import { Button, IconButton, MenuItem, OutlinedInput, Select, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const mainBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const validationSchema = Yup.object({
  status: Yup.string().required("Please, select a status"),
});

const AddBookModal = ({ onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await onSubmit({ ...values });
      } catch (err) {
        // do something
      }
    },
  });

  return (
    <Dialog
      fullWidth
      open={true}
      sx={{
        width: "100%",
        "& .MuiDialog-container": {
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 15,
          marginRight: 2,
        },
      }}
      minWidth={{ md: "xs", lg: "sm" }}
      onClose={onClose}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 20,
          top: 32,
          padding: 0,
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <DialogContent
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "350px",
          padding: "48px",
        }}
      >
        <Box style={mainBoxStyle}>
          <Box>
            <Typography
              variant="body1"
              fontSize={20}
              mb={1}
              fontWeight="600"
              textAlign="center"
            >
              Update Status of a Book
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "16px",
            }}
          >
            <Stack my={2}>
              <Select
                name="status"
                value="Available"
                fullWidth
                onChange={formik.handleChange}
                input={<OutlinedInput fullWidth />}
              >
                {["Available", "Not Available"].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                padding: 0,
              }}
            >
              <UpdateButton fullWidth onClick={formik.handleSubmit}>
                Update
              </UpdateButton>
            </DialogActions>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const UpdateButton = styled(Button)({
  color: "#FFFFFF",
  backgroundColor: "#EF7721",
  fontSize: "16px",
  fontFamily: "Poppins",
  textTransform: "none",
  padding: "16px 8px",
  height: "56px",
  "&:hover": {
    backgroundColor: "#EF7721",
    boxShadow:
      "0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08)",
  },
});

export default AddBookModal;
