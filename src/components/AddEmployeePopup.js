import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/style.css";
import dayjs from "dayjs";

const AddEmployeePopup = ({ setIsOpen, setEmployeeList }) => {
  const [startDate, setStartDate] = useState();

  const initialValues = {
    first_name: "",
    last_name: "",
    designation: "",
    address: "",
    status: "Active",
    experience: "",
    date_of_joining: null,
    profile_pic: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    designation: Yup.string().required("Designation is required"),
    address: Yup.string().required("Address is required"),
    experience: Yup.string().required("Experience is required"),
    date_of_joining: Yup.date().required("Date of Joining is required"),
    profile_pic: Yup.string()
      .url("Invalid URL format")
      .required("Profile Picture Link is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const payload = {
      ...values,
      date_of_joining: dayjs(values.date_of_joining).format("YYYY-MM-DD"),
      id: `${values.first_name}_${values.designation}`,
    };
    setEmployeeList((prevState) => [...prevState, payload]);
    setIsOpen(false);
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-screen-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values, touched, errors }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="first_name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="last_name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Designation
                  </label>
                  <Field
                    type="text"
                    name="designation"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="designation"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Status
                  </label>
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="status"
                        value="Active"
                        className="focus:ring-slate-500 h-4 w-4 text-slate-600 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Active</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <Field
                        type="radio"
                        name="status"
                        value="Inactive"
                        className="focus:ring-slate-500 h-4 w-4 text-slate-600 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Inactive
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Experience (in years)
                  </label>
                  <Field
                    type="text"
                    name="experience"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="experience"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Date of Joining
                  </label>
                  <DatePicker
                    placeholderText="Select Date"
                    name="date_of_joining"
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setFieldValue("date_of_joining", date);
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="date_of_joining"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Profile Picture (Link)
                  </label>
                  <Field
                    type="text"
                    name="profile_pic"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="profile_pic"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-slate-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition duration-300"
                  disabled={isSubmitting}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployeePopup;
