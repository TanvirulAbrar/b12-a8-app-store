import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return <div>Home {data.length}</div>;
};

export default Home;
