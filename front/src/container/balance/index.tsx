import React from "react";
import "./index.css";

const BalancePage: React.FC = () => {
  return (
    <div className="balance-page">
      <div className="header">
        <div className="navigate">
          <a href="/settings">
            <img src="/svg/settings.svg" alt="settings" />
          </a>
          <p>Main wallet</p>
          <a href="#">
            <img src="/svg/bell.svg" alt="bell" />
          </a>
        </div>
        <h1>
          $ 1530.<span>20</span>
        </h1>
      </div>

      <div className="balance-buttons">
        <div className="todo-button">
          <a href="#">
            <img src="/svg/receive.svg" alt="receive" />
          </a>
          <p>Receive</p>
        </div>

        <div className="todo-button">
          <a href="#">
            <img src="/svg/send.svg" alt="send" />
          </a>
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default BalancePage;
