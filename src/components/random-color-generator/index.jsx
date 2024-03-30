import { useState, useEffect } from "react";

import "./styles.css";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [currentColor, setCurrentColor] = useState("#651223");

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor]);

  const createRandomNumberUtility = (length) =>
    Math.floor(Math.random() * length);

  const handleCreateRandomColor = () => {
    if (typeOfColor === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++)
        hexColor += hex[createRandomNumberUtility(16)];
      setCurrentColor(hexColor);
    } else {
      let rgbColor = "rgb(";
      for (let i = 0; i < 3; i++)
        rgbColor += createRandomNumberUtility(256) + ",";
      const updated = rgbColor.replace(/,$/, ")");
      setCurrentColor(updated);
    }
  };

  return (
    <div className="container" style={{ background: currentColor }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate random color</button>
      <div className="display-color">
        <h3>{typeOfColor === "rgb" ? "RGB Color: " : "HEX Color: "} </h3>
        <h1>{currentColor}</h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
