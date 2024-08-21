import React from "react";
import TWButton from "../../button/TWButton";

const TableActionCell = ({ buttons }) => {
  const buttonList = buttons.map((i) => {
    const handleClick = (e) => {
      e.stopPropagation();
      i.onClick();
    };
    switch (i.type) {
      case "DELETE":
        return (
          <TWButton
            icon={"DELETE"}
            buttonType="NONE"
            iconColor="rgb(248,113,113)"
            onClick={handleClick}
          />
        );
      case "EDIT":
        return (
          <TWButton
            icon={"EDIT"}
            buttonType="NONE"
            iconColor="gray"
            onClick={handleClick}
          />
        );
      case "VIEW":
        return (
          <TWButton
            icon={"VIEW"}
            buttonType="NONE"
            iconColor="#10b981"
            onClick={handleClick}
          />
        );

      default:
        break;
    }
  });
  return <div className="flex">{buttonList}</div>;
};

export default TableActionCell;
