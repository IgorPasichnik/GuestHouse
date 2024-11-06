"use client";

import React from "react";
import Intro from "../components/intro";
import ContactsInformation from "../components/contactsInformation";

export default function Contacts() {
  return (
    <div className="">
      <Intro height={"h-3/4 justify-between"} />
      <ContactsInformation />
    </div>
  );
}
