import InputText from "@/components/Input/InputText";
import Head from "next/head";
import React from "react";
import { Alert } from "flowbite-react";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Hotel Realta - Dashboard</title>
      </Head>
      <div>Dashboard</div>

      <Alert color="info">Alert!</Alert>
    </>
  );
}
