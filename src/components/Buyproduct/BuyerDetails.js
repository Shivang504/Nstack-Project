import React from "react";
import { Box, TextField } from "@mui/material";

const BuyerDetails = ({ setUserDetail, userDetail }) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "85%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          size="small"
          label="Buyer Name"
          variant="filled"
          required
          name="name"
          fullWidth
          onChange={(e) =>
            setUserDetail({ ...userDetail, userName: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          size="small"
          label="Mobile Number"
          variant="filled"
          required
          name="number"
          fullWidth
          onChange={(e) =>
            setUserDetail({ ...userDetail, userNumber: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          size="small"
          label="Email ID"
          type="email"
          variant="filled"
          name="email"
          fullWidth
        />
        <TextField
          id="filled-basic"
          size="small"
          label="Delivery Address"
          variant="filled"
          required
          fullWidth
          onChange={(e) =>
            setUserDetail({ ...userDetail, userAddress: e.target.value })
          }
        />
        <div className="flex flex-col md:flex-row gap-5">
          <TextField
            id="filled-basic"
            size="small"
            label="Country"
            variant="filled"
            required
            fullWidth
            onChange={(e) =>
              setUserDetail({ ...userDetail, userCountry: e.target.value })
            }
          />
          <TextField
            id="filled-basic"
            size="small"
            label="State"
            variant="filled"
            required
            fullWidth
            name="state"
            onChange={(e) =>
              setUserDetail({ ...userDetail, userState: e.target.value })
            }
          />
        </div>
        <p className="text-center mt-4">
          Payment Method: Only Cash on Delivery
        </p>
      </Box>
    </>
  );
};

export default BuyerDetails;
