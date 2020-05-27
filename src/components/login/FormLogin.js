import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/stylesLogin";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import { validationLogin } from "./auth/schema-form-login";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
//{/*----------------------------Contextos -----------------------*/}

const Login = (props) => {
  const classes = useStyles();
  const flag_error = false;
  const history = useHistory();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/*----------------------------validacion con formik-----------------------*/}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationLogin}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              history.push("/");
              resetForm({
                values: { email: "", password: "" },
              });
            }}
          >
            {(formik) => (
              <form className={classes.form} onSubmit={formik.handleSubmit}>
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

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={!!(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  {...formik.getFieldProps("password")}
                />
                <Grid item xs={12}>
                  {flag_error ? (
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      This is an error fron server — <strong>"error"</strong>
                    </Alert>
                  ) : null}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid xs={12} md={12} item>
                    {"Don't have an account?    "}
                    <Link
                      className={classes.link}
                      style={{ color: "#292b2c" }}
                      href="/new-account"
                      variant="body2"
                    >
                      Sign up now
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
          {/**Termina La Validacion con formik  */}
        </div>
      </Container>
    </>
  );
};

export default Login;
