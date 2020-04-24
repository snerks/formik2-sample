import React from "react";
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

import * as yup from "yup";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
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
  return (
    <div>
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
        // validate={(values) => {
        //   const errors: Record<string, string> = {};

        //   if (values.firstName.includes("bob")) {
        //     errors.firstName = "No bob";
        //   }

        //   return errors;
        // }}
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
          // <form onSubmit={handleSubmit}></form>
          <Form>
            {/* <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
            {/* <div>
              <TextField
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div> */}
            {/* <Field
              placeholder="first name"
              name="firstName"
              type="input"
              as={TextField}
            /> */}
            <MyTextField
              placeholder="first name"
              name="firstName"
              type="input"
            />
            <div>
              {/* <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              /> */}
              <MyTextField
                placeholder="last name"
                name="lastName"
                type="input"
              />
            </div>
            <Field name="isTall" type="checkbox" as={Checkbox} />

            <div>cookies:</div>

            <Field
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
            <Field name="cookies" value="sugar" type="checkbox" as={Checkbox} />

            <div>yoghurt:</div>
            {/* <Field name="yoghurt" value="peach" type="radio" as={Radio} />
            <Field name="yoghurt" value="blueberry" type="radio" as={Radio} />
            <Field name="yoghurt" value="apple" type="radio" as={Radio} /> */}

            <MyRadio name="yoghurt" type="radio" value="peach" label="peach" />
            <MyRadio
              name="yoghurt"
              type="radio"
              value="blueberry"
              label="blueberry"
            />
            <MyRadio name="yoghurt" type="radio" value="apple" label="apple" />

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
                  >
                    add pet
                  </Button>
                  {values.pets.map((pet, index) => {
                    const name = `pets.${index}.name`;

                    return (
                      <div key={pet.id}>
                        <MyTextField placeholder="pet name" name={name} />

                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="cat">cat</MenuItem>
                          <MenuItem value="dog">dog</MenuItem>
                          <MenuItem value="frog">frog</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          x
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>

            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
