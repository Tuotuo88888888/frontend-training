import React from "react";
import "./index.less";

export default function MineSweeping() {
  const [row, setRow] = React.useState(10);
  const [col, setCol] = React.useState(10);
  const [mine, setMine] = React.useState(10);
  const rowRef = React.useRef();
  const colRef = React.useRef();
  const mineRef = React.useRef();

  const enterHandle = () => {
    setRow(rowRef.current.value);
    setCol(colRef.current.value);
    setMine(mineRef.current.value);
  };

  return (
    <div className="mine-sweeping-container">
      <div class="operation">
        <label>
          横
          <input type="number" name="row" id="row" value={row} ref={rowRef} />
        </label>
        <label>
          竖
          <input type="number" name="col" id="col" value={col} ref={colRef} />
        </label>
        <label>
          雷
          <input
            type="number"
            name="mine"
            id="mine"
            value={mine}
            ref={mineRef}
          />
        </label>
        <button type="button" id="enter" onClick={enterHandle}>
          确定
        </button>
      </div>
    </div>
  );
}
