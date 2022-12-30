import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import SignUpSchema from "../yupSchema";
import InputField from "./Input";

const submitForm = (values) => {
  console.log(values);
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  tnc: false,
};

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { handleChange, values, handleSubmit, dirty, isValid } = formik;
        return (
          <form onSubmit={handleSubmit}>
            <Paper
              sx={{
                maxWidth: "500px",
                padding: "16px",
                justifyItems: "center",
              }}
            >
              <Typography variant="h4">Hii,</Typography>

              <Typography variant="body1" gutterBottom>
                Welcome to E-invoicing App
              </Typography>

              <Typography variant={"h4"} gutterBottom>
                Signup
              </Typography>

              <Grid direction="row" container spacing={1}>
                <Grid item small={12} mobile={6}>
                  <InputField
                    name={"firstName"}
                    label="First name"
                    formik={formik}
                  />
                </Grid>

                <Grid item small={12} mobile={6}>
                  <InputField
                    name={"lastName"}
                    label="Last name"
                    formik={formik}
                  />
                </Grid>

                <Grid item small={12}>
                  <InputField name={"email"} label={"Email"} formik={formik} />
                </Grid>

                <Grid item small={12}>
                  <InputField
                    name={"phone"}
                    label={"Mobile number"}
                    formik={formik}
                  />
                </Grid>

                <Grid item small={12}>
                  <FormControlLabel
                    name="tnc"
                    control={<Checkbox checked={values.tnc} />}
                    label="I agree to the Terms & conditions"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item small={12} align="center">
                  <Button
                    type="submit"
                    disabled={!(dirty && isValid)}
                    variant="contained"
                  >
                    Start Onboarding
                  </Button>
                </Grid>
                <Grid item small={12} align="center">
                  <Typography variant="body2" component={"span"}>
                    Already have an Account?{" "}
                  </Typography>
                  <Link href="/login">Login</Link>
                </Grid>
              </Grid>
            </Paper>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
