"use client";
import { Link } from "@chakra-ui/react";
import NavbarCompany from "../NavbarCompany";

export default function Page() {
  return (
    <>
      <NavbarCompany />
      <div>
        <Link href="/company/employees">Employees</Link>
      </div>
    </>
  );
}
