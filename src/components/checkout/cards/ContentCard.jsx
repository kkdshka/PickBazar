import React from "react";
import { ReactComponent as EditIcon } from "../../../img/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../img/delete.svg";
import classNames from "classnames";
import "./ContentCard.scss";

export const ContentCard = ({
  title,
  text,
  onDelete,
  onClick,
  onEdit,
  active,
  editable = false,
}) => {
  const cardClassName = classNames("content-card", {
    "content-card_active": active,
  });
  const titleClassName = editable
    ? "content-card_editable-title"
    : "content-card_title";

  const textClassName = editable
    ? "content-card_editable-text"
    : "content-card_text";

  return (
    <div className={cardClassName}>
      <div className="content-card_header">
        <div className={titleClassName} onClick={onClick}>
          {title}
        </div>
        {editable && (
          <>
            <div className="content-card_edit-icon">
              <EditIcon onClick={onEdit} />
            </div>
            <div className="content-card_delete-icon">
              <DeleteIcon onClick={onDelete} />
            </div>
          </>
        )}
      </div>
      <div className={textClassName}>{text}</div>
    </div>
  );
};
