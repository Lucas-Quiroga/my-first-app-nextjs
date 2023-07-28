"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="d-flex gap-2 ml-auto ">
        <div className="d-flex flex-row-reverse gap-3 align-items-center">
          <p className="mt-2">{session.user.name}</p>
          <img
            src={session.user.image}
            alt={session.user.email}
            style={{ borderRadius: "50%", width: "3rem" }}
          />
        </div>

        <button
          type="button"
          onClick={() => signOut()}
          className="btn btn-light"
          style={{ borderRadius: "10rem" }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="btn btn-light"
      style={{ borderRadius: "10rem" }}
    >
      Sign In
    </button>
  );
};

export default SigninButton;
