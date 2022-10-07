import React, { useState } from "react";

const Warning = React.lazy(() => import("./Warning"));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world!</h1>
      <h2 className={count > 10 ? "warning" : null}>Count: {count}</h2>
      <button onClick={() => setCount((state) => state + 1)}>+</button>
      <button onClick={() => setCount((state) => state - 1)}>-</button>
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </div>
  );
};

export default App;
