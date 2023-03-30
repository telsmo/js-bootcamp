import React from "react";
import Lottie from "lottie-react";
import searchingUser from "./search-users.json";

const Loading = () => (
  <div
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
    }}
  >
    <Lottie
      animationData={searchingUser}
      loop={true}
      style={{
        margin: 0,
        padding: 0,
        minHeight: 200,
        minWidth: 200,
        maxWidth: "40%",
        maxHeight: "40%",
      }}
    />
  </div>
);

export default Loading;
