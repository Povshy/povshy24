import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

import stripe_logo from "./stripe.svg";
import coinbase_logo from "./coinbase.svg";
import send_logo from "./send.svg";

const BalancePage: React.FC = () => {
  const navigate = useNavigate();

  const [balance, setBalance] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [trans, setTrans] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const userString = localStorage.getItem("user");
        if (!userString) {
          throw new Error("Користувача не знайдено");
        }

        const user = JSON.parse(userString);
        if (!user.id) {
          throw new Error("ID користувача не вказано");
        }

        const res = await fetch(`http://localhost:4000/balance?id=${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }

        const data = await res.json();
        setBalance(data.balance);
        setEmail(data.email);
        setTrans(data.transactions);

        console.log("BALANCE_USER", user);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchBalance();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const logoMap: { [key: string]: string } = {
    Stripe: stripe_logo, // Вставте URL логотипу
    Coinbase: coinbase_logo,
    Sending: send_logo,
  };

  return (
    <div className="balance-page">
      <div className="header">
        <div className="navigate">
          <a onClick={() => navigate(`/settings`)}>
            <img src="/svg/settings.svg" alt="settings" />
          </a>
          <p>Профіль: {email}</p>
          <a href="#">
            <img src="/svg/bell.svg" alt="bell" />
          </a>
        </div>
        <h1>$ {balance}</h1>
      </div>

      <div className="balance-buttons">
        <div className="todo-button">
          <a onClick={() => navigate(`/recive`)}>
            <img src="/svg/receive.svg" alt="receive" />
          </a>
          <p>Receive</p>
        </div>

        <div className="todo-button">
          <a onClick={() => navigate(`/send`)}>
            <img src="/svg/send.svg" alt="send" />
          </a>
          <p>Send</p>
        </div>
      </div>
      <div className="transactions">
        {trans ? (
          trans
            .slice()
            .reverse()
            .map((transaction, index) => (
              <div key={index} className="transaction__item">
                <div className="transaction__logo">
                  <img src={logoMap[transaction.name]} alt={transaction.name} />
                </div>

                <div className="transaction__info">
                  <h2 className="transaction__name">{transaction.name}</h2>
                  <span className="trans__date">
                    {transaction.date} --- {transaction.type}
                  </span>
                </div>

                {transaction.type === "Receipt" ? (
                  <div className="transaction__plus">
                    +${transaction.amount}
                  </div>
                ) : (
                  <div className="transaction__minus">
                    -${transaction.amount}
                  </div>
                )}
              </div>
            ))
        ) : (
          <p>No transactions available.</p>
        )}
      </div>
    </div>
  );
};

export default BalancePage;
