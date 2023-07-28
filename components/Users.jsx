"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import welcome from "../public/welcome.svg";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Users = ({ users }) => {
  const router = useRouter();

  const { data: session } = useSession();

  if (!session || !session.user) {
    return (
      <div className="d-flex flex-column text-center justify-content-center align-items-center mt-5">
        <h2 className={inter.className}>
          welcome to my application please login.
        </h2>
        <Image
          src={welcome}
          style={{ width: "25rem", objectFit: "scale-down" }}
        />
        ;
      </div>
    );
  }

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id}) {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.email} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
