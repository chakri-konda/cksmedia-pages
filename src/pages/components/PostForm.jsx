import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import SendIcon from "@mui/icons-material/Send";

function PostForm() {
  const paperStyle = { padding: "0px 20px 20px 20px", width: 500 };
  const initialValues = {
    username: "",
    title: "",
    content: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "It's too short").required("Required"),
    title: Yup.string().min(1, "Empty").required("Required"),
    content: Yup.string().min(1, "Empty").required("Required"),
  });
  const onSubmit = (values, props) => {
    try {
      fetch("https://workers.cks-media.workers.dev/posts", {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        console.log("posted!");
      });
    } catch (err) {
      console.log(err);
    }
    props.resetForm();
  };
  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          auto-complete={false}
        >
          {(props) => (
            <Form noValidate>
              <Field
                as={TextField}
                name="username"
                label="username"
                fullWidth
                helperText={<ErrorMessage name="username" />}
                required
              />

              <Field
                as={TextField}
                name="title"
                label="Title"
                fullWidth
                helperText={<ErrorMessage name="title" />}
                required
              />

              <Field
                as={TextField}
                name="content"
                label="Content"
                fullWidth
                helperText={<ErrorMessage name="content" />}
                required
              />

              <button className="postBtn" type="submit" variant="outlined">
                Post
                <SendIcon />
              </button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default PostForm;
