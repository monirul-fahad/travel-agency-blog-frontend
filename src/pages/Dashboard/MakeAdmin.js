import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://fierce-sea-69745.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="dashboard-content">
      <div className="md:col-span-3 hidden md:block">
        <AdminSidebar />
      </div>
      <div className="md:col-span-9 col-span-12">
        <h2>Make An Admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleOnBlur}
            type="email"
            className="border border-java-500 rounded p-2 w-3/5 mt-4"
          />
          <button
            type="submit"
            className=" bg-java hover:bg-java-600 text-white py-3 px-8 block mt-4"
          >
            Add Admin
          </button>
        </form>
      </div>
      {/* <div
        className="pt-4 col-span-7 add-product"
        style={{ position: "absolute", right: "0", background: "white" }}
      >
       
      </div> */}
    </div>
  );
};

export default MakeAdmin;
