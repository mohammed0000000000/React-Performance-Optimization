import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LoginForm from "./components/Login";
import Button from "./components/ui/Button";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <main
        className="container space-y-6 mx-auto
      "
      >
        <h1 className="font-semibold text-yellow-500 mb-10 text-xl">
          Performance & Optimization
        </h1>
        <div className="mx-auto flex flex-col justify-center items-center">
          <h3>App Counter : {counter}</h3>
          <Button
            onClick={() => setCounter((prev) => prev + 1)}
            fullWidth={false}
            className="max-w-fit"
          >
            Increase App counter
          </Button>
        </div>
        <Counter></Counter>
        <LoginForm></LoginForm>
      </main>
    </>
  );
}

export default App;
