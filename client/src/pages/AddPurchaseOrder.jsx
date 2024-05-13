import React from "react";
import { TextField, Button, Typography, Grid, IconButton } from "@mui/material";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required("Vendor Name is required"),
  order: yup.string().required("Vendor order is required"),
  reference: yup.string().required("Reference is required"),
  item: yup.string().required("Item Name is required"),
  quantity: yup.string().required("Quantity is required"),
  amount: yup.string().required("Amount is required"),
}).required();

function AddPurchaseOrder() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("formData:", data); // Log the data before sending
      await axios.post("http://localhost:3000/api/form-submit", data); // Assuming your backend endpoint is at "http://localhost:3000/api/form-submit"
      toast.success("New Purchase Added Successfully!");
      navigate("/");
      reset();
    } catch (error) {
      console.error("Error sending data:", error);
      if (error.response && error.response.data && error.response.data.statusCode === 409) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="left" gutterBottom style={{ color: "#fb8c00" }}>
        Add New Purchase Order
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <TextField
              label={
                <>
                  <span>Vendor Name</span>
                  <span style={{ color: "red" }}>*</span>
                </>
              }
              id="name"
              fullWidth
              size="large"
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label={
                <>
                  <span className="">Vendor Order</span>
                  <span style={{ color: "red" }}> *</span>
                </>
              }
              id="order"
              size="small"
              fullWidth
              {...register("order", { required: true })}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label={<><span>Reference <span style={{ color: "red" }}>*</span></span></>}
              id="reference"
              size="small"
              fullWidth
              {...register("reference")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label={<><span>Date <span style={{ color: "red" }}>*</span></span></>}
              id="date"
              size="small"
              fullWidth
              {...register("date")}
            />
          </Grid>
          <Grid item xs={5} style={{ marginTop: '10px', marginBottom: '20px' }}>
            <TextField
              label={<><IconButton disabled><PersonIcon /></IconButton> SalesPerson</>}
              id="sales"
              size="small"
              fullWidth
              {...register("sales")}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={10}>
            <label className="bg-gray-400 text-orange font-bold">
              Item Table
            </label>
          </Grid>
          <Grid item xs={5} style={{ marginBottom: '10px', marginTop: '10px' }}>
            <TextField
              label={<span className="text-amber-800">Item Name <span style={{ color: "red" }}>*</span></span>}
              className="text-amber-800"
              id="item"
              size="small"
              fullWidth
              {...register("item")}
            />
          </Grid>
          <Grid item xs={5} style={{ marginTop: '10px' }}>
            <TextField
              label={<span>Quantity <span style={{ color: "red" }}>*</span></span>}
              id="quantity"
              size="small"
              fullWidth
              {...register("quantity")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label={<span>Rate</span>}
              id="rate"
              size="small"
              fullWidth
              {...register("rate")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label={<span>Amount ETB <span style={{ color: "red" }}>*</span></span>}
              id="amount"
              size="small"
              fullWidth
              {...register("amount")}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" size="small" sx={{ mt: 4, backgroundColor: "#FFA500", "&:hover": { backgroundColor: "#00897b" } }}>
          Add Order
        </Button>
      </form>
    </Container>
  );
}

export default AddPurchaseOrder;
