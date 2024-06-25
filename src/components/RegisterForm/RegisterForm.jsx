import css from "./RegisterForm.module.css";
import { Formik, Form, Field } from "formik";

import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/authOps";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function RegisterForm() {
  const dispatch = useDispatch();
  function handleSubmit(value, action) {
    dispatch(register(value));
    action.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <div className={css.containerForm}>
        <Form className={css.form}>
          <label>
            <span className={css.inputLabel}>Name</span>
            <Field type="text" name="name" className={css.field} />
          </label>
          <label>
            <span className={css.inputLabel}>Email</span>
            <Field type="email" name="email" className={css.field} />
          </label>
          <label>
            <span className={css.inputLabel}>Password</span>
            <Field type="password" name="password" className={css.field} />
          </label>
          <button type="submit" className={css.btnSubmit}>
            Register
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default RegisterForm;
