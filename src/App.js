import { css } from "linaria";
import { styled } from "linaria/react";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Section = styled.div`
  border: 1px solid black;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: #f15f79;
`;

const Box = styled.div`
  background-color: orange;
  height: ${(props) => props.recSize}px;
  width: ${(props) => props.recSize}px;
`;

const customClass = css`
  font-size: 100px;
`;

const App = () => {
  const [recSize, setSize] = useState(48);
  return (
    <Section>
      <Title>Hello world!</Title>

      <button
        onClick={() => {
          setSize((prev) => prev + 5);
        }}
      >
        +1 Size
      </button>
      <Box recSize={recSize}>{recSize}</Box>
      <div className={customClass}>Surprise</div>
    </Section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
