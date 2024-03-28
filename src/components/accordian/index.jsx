import { useState } from "react";

import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selectedID, setSelectedID] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [selectedValues, setSelectedValues] = useState(
    Array(data.length).fill(false)
  );

  const handleSingleSelection = (currentID) =>
    setSelectedID(currentID === selectedID ? null : currentID);

  const handleMultipleSelection = (currentID) => {
    let arr = [...selectedValues];
    arr[currentID - 1] = !arr[currentID - 1];
    setSelectedValues(arr);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => setMultipleSelection(!multipleSelection)}
        className={multipleSelection ? "selected" : "not-selected"}
      >
        Enable Multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  multipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(multipleSelection
                ? selectedValues[dataItem.id - 1]
                : dataItem.id === selectedID) && (
                <div className="content">{dataItem.answer} </div>
              )}
            </div>
          ))
        ) : (
          <div> No data found! </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
