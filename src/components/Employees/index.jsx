import React, { useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setEmployeeList } from "../../store/employeeSlice";

import "./style.scss";

const Employees = ({ getEmployees }) => {
  const dispatch = useDispatch();
  const companiesList = useSelector((state) => state.company.list);
  const employeeList = useSelector((state) => state.employee.list);

  const [isPending, startTransition] = useTransition();
  const [selectAllEmployees, setSelectAllEmployees] = useState(false);

  const company = getEmployees(companiesList).companyName;
  const list = employeeList.filter((item) => item.company === company);

  const changeAllCheckbox = (e) => {
    setSelectAllEmployees(e.target.checked);
  };

  const changeColor = (e, item) => {
    console.log("changeColor");
    dispatch(
      setEmployeeList([
        {
          id: item.id,
          company: item.company,
          checkbox: e.target.checked,
          surname: item.surname,
          name: item.name,
          position: item.position,
        },
        ...employeeList.filter((element) => element.id !== item.id),
      ])
    );
  };

  console.log("list", list);

  return (
    <div className="employees-wrapper">
      <div className="title">Сотрудники</div>
      <div className="checkbox-all">
        <label htmlFor="employees">Выделить всё</label>
        <input
          type="checkbox"
          id="employees"
          checked={selectAllEmployees}
          onChange={(e) => changeAllCheckbox(e)}
        />
      </div>
      <div className="employee-table">
        <div className="table">
          <div className="table__mark"></div>
          <div className="table__surname">Фамилия:</div>
          <div className="table__name">Имя:</div>
          <div className="table__position">Должность:</div>
        </div>
        {list.map((item) => (
          <div
            className={
              item.checkbox || selectAllEmployees
                ? "table table-color"
                : "table"
            }
          >
            <input
              className="table__mark"
              type="checkbox"
              checked={selectAllEmployees ? true : item.checkbox}
              onChange={(e) => changeColor(e, item)}
            />
            <div className="table__surname">{item.surname}</div>
            <div className="table__name">{item.name}</div>
            <div className="table__position">{item.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Employees };
