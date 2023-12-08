import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import Iranbaba from "../../assets/iraanbaba.svg";
import { useNavigate } from "react-router-dom";

function LoginDetail() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("آدرس ایمیل معتبر نیست")
        .required("وارد کردن آدرس ایمیل الزامی است"),
      password: Yup.string().required("وارد کردن رمز عبور الزامی است"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/dashboard");
    },
  });
  return (
    <div className=" flex flex-col bg-[#ececec] w-full h-[650px] items-center justify-center ">
      <div className="flex items-start justify-start w-full pr-4 ">
        <button className="bg-none ">برگشت</button>
      </div>
      <div className="w-[380px] h-[330px] border-none shadow-2xl rounded-3xl border border-gray-500 bg-white p-4 flex flex-col gap-3">
        <div className="w-full flex justify-end">
          <img
            className="w-40 h-16 "
            src={Iranbaba}
            alt=""
          />
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-3">
          <input
            className="w-full outline-none border-b border-gray-400 "
            type="text"
            placeholder="ایمیل"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            className="w-full outline-none border-b border-gray-400"
            type="password"
            placeholder="رمز عبور"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <button
            type="submit"
            className="bg-green-400">
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginDetail;
