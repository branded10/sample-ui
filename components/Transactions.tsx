"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";

// Dummy data for transactions
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "debit", amount: 2000 },
  { id: 4, type: "debit", amount: 2000 },
  { id: 5, type: "credit", amount: 2000 },
  { id: 6, type: "debit", amount: 2000 },
  { id: 7, type: "debit", amount: 2000 },
  { id: 8, type: "credit", amount: 2000 },
  { id: 9, type: "debit", amount: 2000 },
  { id: 10, type: "debit", amount: 2000 },
  { id: 11, type: "debit", amount: 2000 },
  { id: 12, type: "credit", amount: 2000 },
  { id: 14, type: "debit", amount: 2000 },
  { id: 15, type: "credit", amount: 2000 },
  { id: 16, type: "debit", amount: 2000 },
  // { id: 17, type: "debit", amount: 2000 },
  // { id: 18, type: "credit", amount: 2000 },
  // { id: 19, type: "debit", amount: 2000 },
  // { id: 20, type: "credit", amount: 2000 },
  // { id: 21, type: "debit", amount: 2000 },
  // { id: 22, type: "debit", amount: 2000 },
  // { id: 23, type: "debit", amount: 2000 },
  // { id: 24, type: "credit", amount: 2000 },
  // { id: 26, type: "credit", amount: 2000 },
  // { id: 27, type: "credit", amount: 2000 },
  // { id: 28, type: "credit", amount: 2000 },
  // { id: 29, type: "credit", amount: 2000 },
  { id: 30, type: "credit", amount: 2000 },
  { id: 31, type: "credit", amount: 2000 },
  { id: 32, type: "credit", amount: 2000 },
  // Add more transactions as needed
];

const TransactionsList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 13;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {transactions.length > 0 ? (
        transactions
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .reverse()
          .map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between border-b border-gray-200 py-2"
            >
              <div>
                {transaction.type === "credit" ? (
                  <Image
                    src="/pluss_icon.png"
                    alt="Credit"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/minuss_icon.png"
                    alt="Debit"
                    width={20}
                    height={20}
                  />
                )}
              </div>
              <div>
                {transaction.type.charAt(0).toUpperCase() +
                  transaction.type.slice(1)}
                ed
              </div>
              <div
                className={`${
                  transaction.type === "credit"
                    ? "text-[#49ca76]"
                    : "text-[#fb6565]"
                }`}
              >
                ${transaction.amount.toFixed(2)}
              </div>
              {/* <Link href={`/transaction/${transaction.id}`}>Details</Link> */}
              <div>
                {transaction.type === "debit" ? "Withdrawn" : "Deposited"}
              </div>
            </div>
          ))
      ) : (
        <div className="text-center text-[#00000065]">
          No Transactions yet ...
        </div>
      )}
      <div className="join">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <input
            key={page}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={page.toString()}
            checked={page === currentPage}
            onChange={() => handleClick(page)}
          />
        ))}
      </div>
    </>
  );
};

export default TransactionsList;
