import MyName from "Components/MyName";
import MyPhoto from "Components/MyPhoto";
import Navbar from "Components/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <main className=" ">
      <Navbar />
      <MyName />

      <div className="w-4/5 m-auto bg-[]">
        <MyPhoto />
      </div>
      
    </main>
  );
};

export default HomePage;
