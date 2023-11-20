import React from "react";
import SignOutButton from "./utils/Logout";
import Wallet from "./utils/Wallet";
import Dialog from "./ui/Dialog";

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <Dialog />
      <Wallet />
      <SignOutButton />
    </div>
  );
};

export default Navbar;
