import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import plus_sign from "../images/plus_sign.png";
import minus_sign from "../images/minus_sign.png";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const style_plus = {
    width: "30px",
    height: "30px",
    border: "none",
    background: `url(${plus_sign}) no-repeat center center`,
    backgroundSize: "contain",
  };

  const style_minus = {
    width: "30px",
    height: "30px",
    border: "none",
    background: `url(${minus_sign}) no-repeat center center`,
    backgroundSize: "contain",
  };

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          style={style_plus}
        ></button>
      </td>

      <td>
        <button
          onClick={(event) => decreaseAllocation(props.name)}
          style={style_minus}
        ></button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};
export default ExpenseItem;
