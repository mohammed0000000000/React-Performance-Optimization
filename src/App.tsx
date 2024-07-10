import "./App.css";
import Counter from "./components/Counter";
import LoginForm from "./components/Login";

function App() {
  return (
    <>
      <main
        className="container space-y-6 mx-auto
      "
      >
        <h1 className="font-semibold text-yellow-500 mb-10 text-xl">
          Performance & Optimization
        </h1>
        <Counter></Counter>
        <LoginForm></LoginForm>
      </main>
    </>
  );
}

export default App;
