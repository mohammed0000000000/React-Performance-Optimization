import Button from "./ui/Button";
import { useState, memo } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3 className="text-lg font-bold">
        Counter :{" "}
        <span className="text-indigo-600 font-semibold">{counter}</span>
      </h3>
      <div className="flex justify-center mb-10">
        <Button onClick={() => setCounter((prev) => prev + 1)}>
          Increase Counter
        </Button>
      </div>
    </div>
  );
};

export default memo(Counter);
