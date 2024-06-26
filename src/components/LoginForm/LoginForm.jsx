import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOps";

const contactSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requred"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};
function ContactForm() {
  const dispatch = useDispatch();

  function handleSubmit(value, action) {
    dispatch(logIn(value));
    console.log(value)
    action.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <div className={css.containerForm}>
        <Form className={css.form}>
          <label htmlFor="">
            <span className={css.inputLabel}>Email</span>
            <Field type="email" name="email" className={css.field} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <label htmlFor="">
            <span className={css.inputLabel}>Password</span>
            <Field type="password" name="password" className={css.field} />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.btnSubmit}>
            Log in
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default ContactForm;
