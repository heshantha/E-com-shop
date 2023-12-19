import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../behaviour/Actions";
import { connect } from "react-redux";
import { InputField } from "../../InputField/InputField";
import { LinkButton } from "../LinkButton/LinkButton";
import { PrimaryButton } from "../Button/PrimaryButton";

interface LoginFormProps {
  data: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== null) {
      localStorage.setItem("AccessToken", data);
      navigate("/home");
    }
  }, [data]);

  const handleSignIn = () => {
    dispatch(loginRequest(email, password));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: "rgba(3, 0, 71, 0.09) 0px 8px 45px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "500px",
          padding: "3rem 3.75rem 0px",
          margin: "2rem auto 0 auto",
        }}
      >
        <Box mb={4} textAlign="center">
          <Typography mb={2} variant="h3">
            OrelBuy
          </Typography>
          <Typography variant="h5">Hello, Welcome to OrelBu</Typography>
        </Box>
        <Box mb={4} textAlign="center">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mb={4} textAlign="center">
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box mb={3} textAlign="center">
          <PrimaryButton onClick={handleSignIn}>Log In</PrimaryButton>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography mr={1} sx={{ color: "#2B3445" }} variant="h4">
            Don't have an account?
          </Typography>
          <LinkButton onClick={() => console.log("Create account clicked")}>
            <Typography variant="h4">Sign Up</Typography>
          </LinkButton>
        </Box>

        <Box
          mt={3}
          mb={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography mr={1} sx={{ color: "#2B3445" }} variant="h4">
            Forget Your Password?
          </Typography>
          <LinkButton>
            <Typography variant="h4">Reset it</Typography>
          </LinkButton>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#f3f5f9",
          paddingTop: "19px",
          paddingBottom: "19px",
          paddingLeft: "19px",
          paddingRight: "19px",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto 2rem auto",
        }}
      >
        <Box flexGrow={1}>
          <LinkButton
            sx={{
              textDecoration: "none",
            }}
          >
            Continue as Guest
          </LinkButton>
        </Box>
        <Box mr={1}>
          <LinkButton
            sx={{
              textDecoration: "none",
            }}
          >
            Privacy
          </LinkButton>
        </Box>
        <Box>
          <LinkButton
            sx={{
              textDecoration: "none",
            }}
          >
            Terms
          </LinkButton>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state.token,
  };
};

export default connect(mapStateToProps)(LoginForm);
