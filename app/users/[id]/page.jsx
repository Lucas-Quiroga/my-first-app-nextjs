import React from "react";
import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

const UsersPage = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <div className="row mx-auto d-flex justify-content-center align-items-center mt-5">
      <div className="col-md-6 ">
        <div class="card">
          <div class="card-header text-center">
            <h3>
              {user.id}) {user.first_name} {user.last_name}
            </h3>
          </div>
          <div class="card-body text-center">
            <img src={user.avatar} alt={user.email} />
            <h5 class="card-title pt-3">{user.email}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              facilis fuga odit quod debitis sequi.
            </p>
            <Link className="btn btn-primary" href="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
