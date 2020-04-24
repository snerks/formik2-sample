import React, { useState } from "react";
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray,
} from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { Paper, Grid, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./components/Header";
import * as yup from "yup";

import { blue } from "@material-ui/core/colors";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

// Does not work in pre-Chromium MS Edge
// const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
//   const [field] = useField<{}>(props);

//   return <FormControlLabel {...field} control={<Radio />} label={label} />;
// };

const MyRadio: React.FC<MyRadioProps> = (props) => {
  const { label, ...otherProps } = props;
  const [field] = useField<{}>(otherProps);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyCheckbox: React.FC<MyRadioProps> = (props) => {
  const { label, ...otherProps } = props;
  const [field] = useField<{}>(otherProps);

  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      autoComplete="off"
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required(),
    })
  ),
});

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",

      primary: blue,
      secondary: blue,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} square style={{ height: "100%" }}>
        <Grid container direction="column">
          <Grid item>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Grid>
          <Grid item container>
            <Grid item>
              <div style={{ margin: 30 }}>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    isTall: false,
                    cookies: [],
                    yoghurt: "",
                    pets: [{ type: "cat", name: "jarvis", id: Math.random() }],
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(data, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    // Make async call
                    console.log("submit", data);

                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <Grid container>
                      <Grid item xs={12} md={8}>
                        <Form>
                          <MyTextField
                            placeholder="first name"
                            name="firstName"
                            type="input"
                          />
                          <div>
                            <MyTextField
                              placeholder="last name"
                              name="lastName"
                              type="input"
                            />
                          </div>
                          {/* <Field name="isTall" type="checkbox" as={Checkbox} /> */}
                          <MyCheckbox
                            name="isTall"
                            type="checkbox"
                            label="Is Tall?"
                          />

                          <div>cookies:</div>

                          {/* <Field
                            name="cookies"
                            value="chocolate chip"
                            type="checkbox"
                            as={Checkbox}
                          />
                          <Field
                            name="cookies"
                            value="snickerdoodle"
                            type="checkbox"
                            as={Checkbox}
                          />
                          <Field
                            name="cookies"
                            value="sugar"
                            type="checkbox"
                            as={Checkbox}
                          /> */}

                          <MyCheckbox
                            name="cookies"
                            type="checkbox"
                            label="Chocolate Chip"
                            value="chocolate chip"
                          />

                          <MyCheckbox
                            name="cookies"
                            type="checkbox"
                            label="Snickerdoodle"
                            value="snickerdoodle"
                          />
                          <MyCheckbox
                            name="cookies"
                            type="checkbox"
                            label="Sugar"
                            value="sugar"
                          />
                          <div>yoghurt:</div>

                          <MyRadio
                            name="yoghurt"
                            type="radio"
                            value="peach"
                            label="peach"
                          />
                          <MyRadio
                            name="yoghurt"
                            type="radio"
                            value="blueberry"
                            label="blueberry"
                          />
                          <MyRadio
                            name="yoghurt"
                            type="radio"
                            value="apple"
                            label="apple"
                          />

                          <Grid container direction="column">
                            <Grid item>Pets</Grid>
                            <Grid item container>
                              <Grid item>
                                <FieldArray name="pets">
                                  {(arrayHelpers) => (
                                    <div>
                                      <Button
                                        onClick={() =>
                                          arrayHelpers.push({
                                            type: "frog",
                                            name: "",
                                            id: "" + Math.random(),
                                          })
                                        }
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                      >
                                        add pet
                                      </Button>

                                      <Grid container>
                                        {values.pets.map((pet, index) => {
                                          const name = `pets.${index}.name`;

                                          return (
                                            <Grid item container key={pet.id}>
                                              <Grid item>
                                                <MyTextField
                                                  placeholder="pet name"
                                                  name={name}
                                                />
                                              </Grid>

                                              <Grid item>
                                                <Field
                                                  name={`pets.${index}.type`}
                                                  type="select"
                                                  as={Select}
                                                >
                                                  <MenuItem value="cat">
                                                    cat
                                                  </MenuItem>
                                                  <MenuItem value="dog">
                                                    dog
                                                  </MenuItem>
                                                  <MenuItem value="frog">
                                                    frog
                                                  </MenuItem>
                                                </Field>
                                              </Grid>
                                              <Grid item>
                                                <Button
                                                  onClick={() =>
                                                    arrayHelpers.remove(index)
                                                  }
                                                  variant="outlined"
                                                  color="secondary"
                                                  size="small"
                                                >
                                                  x
                                                </Button>
                                              </Grid>
                                            </Grid>
                                          );
                                        })}
                                      </Grid>
                                    </div>
                                  )}
                                </FieldArray>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <div style={{ paddingTop: 30 }}>
                                <Button
                                  disabled={isSubmitting}
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                >
                                  submit
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </Form>
                      </Grid>
                      <Grid item xs={12} md={4} container direction="row">
                        <Grid item>
                          <pre>{JSON.stringify(values, null, 2)}</pre>
                        </Grid>
                        <Grid item>
                          <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Formik>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
