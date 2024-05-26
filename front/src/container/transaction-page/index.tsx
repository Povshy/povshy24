import { useState, useEffect } from "react";
import "./index.css";
import { useParams } from "react-router-dom";

import Title from "../../component/title";
import BackButton from "../../component/back-button";

const TransactionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [error, setError] = useState<string | null>(null);
  const [transaction, setTransaction] = useState<{
    amount: number;
    type: string;
    name: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      if (id) {
        try {
          const res = await fetch(
            `http://localhost:4000/transaction?id=${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message);
          }

          const data = await res.json();
          setTransaction(data.transaction);
          console.log("Transaction data received:", data); // Додано для відладки
        } catch (error: any) {
          console.error("Error fetching transaction:", error.message); // Додано для відладки
          setError(error.message);
        }
      }
    };
    fetchTransaction();
  }, [id]);

  return (
    <div>
      <BackButton />
      <div className="sending-page">
        <Title title="Transaction" />
        {error ? (
          <p className="error-message">{error}</p>
        ) : transaction ? (
          <div className="transaction-details">
            <p>Amount: ${transaction.amount}</p>
            <p>Type: {transaction.type}</p>
            <p>Name: {transaction.name}</p>
            <p>Date: {transaction.date}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;
