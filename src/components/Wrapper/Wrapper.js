import React from "react";
import Assistant from "../Assistant/Assistant";
import Student from "../Student/Student";
import style from "./Wrapper.module.scss";
import DATA from "../../data/data.json";

const Wrapper = () => {
  const groupName = DATA.reduce((member, item) => {
    member[item.group] = [];
    return member;
  }, {});
  console.log(Object.keys(groupName));
  return (
    <div className={style.section}>
      {Object.keys(groupName).map((group) => (
        <div className={style.section__card}>
          <div className={style.section__card__title}>
            <span>{group}</span>
          </div>
          <Student group={group} style={style}></Student>
          <Assistant group={group} style={style}></Assistant>
        </div>
      ))}
    </div>
  );
};

export default Wrapper;
