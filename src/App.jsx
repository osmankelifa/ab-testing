import { useEffect, useState } from "react";

function App() {
  const [visitor, setVisitor] = useState(0);
  useEffect(() => {
    const randomizeVisitor = Math.random();
    console.log(randomizeVisitor);
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    console.log({
      event: "ctaClick",
      cta: "button",
      variant: visitor === 0 ? "variant A" : "variant B",
    });
  };
  return (
    <div
      style={{
        textAlign: "center",
        color: "blue",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div>
        {visitor === 1 ? (
          <img src="https://picsum.photos/400" alt="image" />
        ) : (
          <></>
        )}
      </div>

      <button type="submit" onClick={handleClick}>
        Sign Up
      </button>
    </div>
  );
}
export default App;
