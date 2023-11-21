"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <div
      className="absolute top-4 right-4 rounded-md w-[100px] p-2 text-center bg-[#4f46e5] text-white border-0 cursor-pointer"
      onClick={() => signOut()}
    >
      <button>Sign Out</button>
    </div>
  );
}
