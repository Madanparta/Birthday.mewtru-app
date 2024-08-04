import React from "react";

const Loader = ({color}) => {
  return (
    <div
    style={{
        color:color
    }}
      className={` inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status">
    </div>
  );
};

export default Loader;
