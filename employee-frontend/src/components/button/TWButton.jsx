import React, { useMemo } from "react";
import classnames from "classnames";
import { FiPlus } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const TWButton = ({
  label,
  showIcon = true,
  buttonType,
  icon,
  isDisabled,
  isRequesting,
  iconColor,
  ...rest
}) => {
  const buttonClassName = useMemo(() => {
    switch (buttonType) {
      case "PRIMARY":
        return classnames(
          "flex items-center gap-2 rounded bg-[#10b981] py-1.5 px-3 font-medium text-white hover:bg-opacity-80"
        );
      case "NONE":
        return classnames(
          "flex items-center gap-2 rounded py-1 px-1 font-medium text-white hover:bg-opacity-80"
        );
      default:
        return classnames(
          "flex items-center gap-2 rounded bg-[#10b981] py-1.5 px-3 font-medium text-white hover:bg-opacity-80"
        );
    }
  }, [buttonType]);
  const buttonIcon = useMemo(() => {
    if (!showIcon) return null;

    switch (icon) {
      case "ADD":
        return <FiPlus size={20} color={iconColor} />;
      case "DELETE":
        return <FaTrash size={20} color={iconColor} />;
      case "EDIT":
        return <FaEdit size={20} color={iconColor} />;
      case "VIEW":
        return <FaEye size={20} color={iconColor} />;

      default:
        return <FiPlus size={20} color={iconColor} />;
    }
  }, [buttonType, iconColor]);
  return (
    <button
      className={buttonClassName}
      {...rest}
      disabled={isDisabled || isRequesting}
    >
      {buttonIcon}
      {label}
    </button>
  );
};

export default TWButton;
