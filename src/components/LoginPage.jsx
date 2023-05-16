import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../utils/loginSlice";
import { toggleMenu } from "../utils/appSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    console.log("check");
    dispatch(toggleLogin());
  };
  const auth = useSelector((store) => store.login.auth);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/4 h-1/2">
        <h1 className="mb-4 font-bold text-xl text-center">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              loginHandler();
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col h-full">
              <Field
                type="email"
                name="email"
                className="border border-gray-400 p-2 mb-4 rounded-sm"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mb-2"
              />
              <Field
                type="password"
                name="password"
                className="border border-gray-400 p-2 mb-4 rounded-sm"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 mb-2"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
