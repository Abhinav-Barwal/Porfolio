import React from "react";
type PopupProps = {
  message: string;
  onClose: () => void;
  type?: "success" | "error";
};

export default function Popup({ message, onClose, type = "success" }: PopupProps) {
    return (
    <div className={`popup ${type}`}>
            <div className="inner-container">
                <i className="bi bi-x-circle cancel-btn" onClick={onClose}></i>
                <p className="message">{message} <i className={`bi ${type === "success" ? "bi-check2-circle" : "bi-exclamation-circle"}`}></i></p>
            </div>
        </div>
    )
}