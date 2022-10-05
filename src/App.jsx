import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Companies } from "./components/Companies";
import { Employees } from "./components/Employees";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { setCompanyList } from "./store/companySlice";
import { setEmployeeList } from "./store/employeeSlice";

import employeeData from "./const/employees.json";
import companiesData from "./const/companies.json";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const companiesList = useSelector((state) => state.company.list);
  const employeeList = useSelector((state) => state.employee.list);

  useEffect(() => {
    dispatch(setCompanyList(companiesData));
    dispatch(setEmployeeList(employeeData));
  }, []);

  const getEmployees = (list) => {
    return list.find((item) => item.isChecked === true);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Companies />
        {getEmployees(companiesList) ? (
          <Employees getEmployees={getEmployees} />
        ) : null}
      </main>
      <Footer />
    </>
  );
};

export default App;
