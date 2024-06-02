import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  const style = {
    backgroundColor: "#AFE1AF",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    width: "100%",
  };
  return (
    <select
      style={style}
      onChange={(event) => changeCurrency(event.target.value)}
    >
      <option defaultValue>Choose...</option>
      <option value="$" name="dollar">
        $ Dollar
      </option>
      <option value="£" name="pound">
        £ Pound
      </option>
      <option value="€" name="euro">
        € Euro
      </option>
      <option value="₹" name="ruppee">
        ₹ Ruppee
      </option>
    </select>
  );
};

export default Currency;
