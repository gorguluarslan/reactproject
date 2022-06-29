import React from "react";
import DATA from "../../data/data.json";

const Assistant = (props) => {
  const style = props.style;

  return (
    <div className={style.section__card__assistant}>
      {DATA.filter(
        (member) => member.group === props.group && member.assistant
      ).map((member) => (
        <ul>
          <li>{member.id}</li>
          <li>{member.name}</li>
          <li>{member.assistant ? "+" : "-"}</li>
          <li>{member.group}</li>
        </ul>
      ))}
    </div>
  );
};

export default Assistant;
