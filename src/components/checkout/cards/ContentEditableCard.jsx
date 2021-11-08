import React from "react";
import { ReactComponent as EditIcon } from "../../../img/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../img/delete.svg";
import classNames from "classnames";
import "./ContentCard.scss";

export const ContentEditableCard = ({
  title,
  text,
  onDelete,
  onClick,
  onEdit,
  active,
}) => {
  return (
    <div
      className={classNames("content-card", { "content-card_active": active })}
    >
      <div className="content-card_header">
        <div className="content-card_title" onClick={onClick}>
          {title}
        </div>
        <div className="content-card_edit-icon">
          <EditIcon onClick={onEdit} />
        </div>
        <div className="content-card_delete-icon">
          <DeleteIcon onClick={onDelete} />
        </div>
      </div>
      <div className="content-card_text">{text}</div>
    </div>
  );
};
