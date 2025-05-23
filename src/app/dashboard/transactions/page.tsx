"use client";
import React, { useState } from "react";
import TransactionsList from "./_components/TransactionsList";
import TransactionForm from "./_components/TransactionForm";

function page() {
  const [render, setRender] = useState<boolean>(false);

  return (
    <section className="py-8 pr-8 space-y-4">
      <TransactionsList render={render} />
      <TransactionForm render={render} setRender={setRender} />
    </section>
  );
}

export default page;
