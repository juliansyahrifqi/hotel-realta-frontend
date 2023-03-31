import InputSelect from "@/components/Input/InputSelect";
import Modal from "@/components/Modal/Modal";
import Head from "next/head";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Hotel Realta - Dashboard</title>
      </Head>
      <div>Dashboard</div>
      <InputSelect />

      <Modal />
    </>
  );
}
