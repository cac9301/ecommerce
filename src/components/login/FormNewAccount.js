import React from "react";
import { Formik } from "formik";
import { validationNewAccount } from "./auth/schema-form-login";
//{/*----------------------------Material UI -----------------------*/}
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Alert, AlertTitle } from "@material-ui/lab";
//{/*----------------------------Material UI -----------------------*/}
import useStyles from "./styles/stylesNewAccount";
import { useHistory } from "react-router-dom";
//{/*----------------------------Contextos -----------------------*/}

const NewAccount = () => {
  const classes = useStyles();
  const history = useHistory();
  const flag_error = false;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/*----------------------------validacion con formik-----------------------*/}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirpassword: "",
          }}
          validationSchema={validationNewAccount}
          onSubmit={(values, { resetForm }) => {
            /*const user = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            };*/
            console.log(values);
            history.push("/");
            resetForm({
              values: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirpassword: "",
              },
            });
          }}
        >
          {(formik) => (
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={
                      !!(formik.touched.firstName && formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    {...formik.getFieldProps("firstName")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={
                      !!(formik.touched.lastName && formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    variant="outlined"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    {...formik.getFieldProps("lastName")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    {...formik.getFieldProps("email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    {...formik.getFieldProps("password")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="confirpassword"
                    label="confirpassword"
                    type="password"
                    id="confirpassword"
                    error={
                      !!(
                        formik.touched.confirpassword &&
                        formik.errors.confirpassword
                      )
                    }
                    helperText={
                      formik.touched.confirpassword &&
                      formik.errors.confirpassword
                    }
                    {...formik.getFieldProps("confirpassword")}
                  />
                </Grid>
                <Grid item xs={12}>
                  {flag_error ? (
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      This is an error fron server — <strong>error</strong>
                    </Alert>
                  ) : null}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                <Link
                      className={classes.link}
                      style={{ color: "#292b2c" }}
                      href="/login"
                      variant="body2"
                    >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {/**Termina La Validacion con formik  */}
      </div>
    </Container>
  );
};
export default NewAccount;
