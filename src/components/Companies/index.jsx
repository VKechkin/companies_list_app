import React, { useState, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCompanyList } from "../../store/companySlice";

import "./style.scss";

const Companies = () => {
  const dispatch = useDispatch();
  const companiesList = useSelector((state) => state.company.list);
  const employeeList = useSelector((state) => state.employee.list);

  const [isPending, startTransition] = useTransition();
  const [selectAll, setSelectAll] = useState(false);

  const changeAllCheckbox = (e) => {
    setSelectAll(e.target.checked);
  };

  const changeOneCheckbox = (e, item) => {
    console.log("companiesList", companiesList);
    let newItems = companiesList.filter((el) => el !== item);
    console.log("newItems", newItems);
    dispatch(
      setCompanyList([
        {
          id: item.id,
          companyName: item.companyName,
          isChecked: e.target.checked,
          numberOfEmployees: item.numberOfEmployees,
          address: item.address,
        },
        ...newItems,
      ])
    );
  };

  return (
    <div className="companies-wrapper">
      <div className="title">Компании</div>
      <div className="checkbox-all">
        <label htmlFor="companies">Выделить всё</label>
        <input
          type="checkbox"
          id="companies"
          checked={selectAll}
          onChange={(e) => changeAllCheckbox(e)}
        />
      </div>
      <div className="company-table">
        <div className="table">
          <div className="table__mark"></div>
          <div className="table__name">Название компании:</div>
          <div className="table__number">Количество сотрудников:</div>
          <div className="table__address">Адрес:</div>
        </div>
        {companiesList.map((item) => {
          const { id, companyName, isChecked, numberOfEmployees, address } =
            item;
          const { country, city, street, house } = address;
          return (
            <div
              className={isChecked || selectAll ? "table table-color" : "table"}
              key={id}
            >
              <input
                className="table__mark"
                type="checkbox"
                checked={selectAll ? true : isChecked}
                onChange={(e) => changeOneCheckbox(e, item, isChecked)}
              />
              <div className="table__name">{companyName}</div>
              <div className="table__number">{numberOfEmployees}</div>
              <div className="table__address">
                {country}, {city}, {street}, {house}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Companies };
