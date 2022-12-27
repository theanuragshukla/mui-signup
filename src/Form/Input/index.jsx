import { TextField } from "@mui/material";

const InputField = ({ label, variant, required, name, formik }) => {
  const { values, handleChange, errors, touched, handleBlur } = formik;

  return (
    <TextField
      variant="standard"
      label={!label ? "" : label}
      required={required ? required : false}
      fullWidth
      name={name && name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
    />
  );
};

export default InputField;
