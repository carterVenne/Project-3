import React from "react";
import "../styles/AccountCreationBtn.css";

function AccountCreationBtn(props) {
    return (
      <button onClick={props.onClick} className={`${props["data-value"]}`} {...props} />
    );
  }

export default AccountCreationBtn;