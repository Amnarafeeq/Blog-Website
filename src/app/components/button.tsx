import React from "react";

interface IBtn {
  btnText: string;
}

const Button = ({ btnText }: IBtn) => {
  return (
    <div>
      <button className="text-left  px-10  py-2 bg-customRed hover:bg-red-700 text-white font-bold hover:scale-105 transition duration-300">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
