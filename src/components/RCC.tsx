import React from "react";

const RCC = ({ serverComponent }) => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* <div>title passed to Client Child: {props.title}</div> */}
        <div>server component passed to Client Child:{serverComponent}</div>
      </React.Suspense>
    </>
  );
};

export default RCC;
