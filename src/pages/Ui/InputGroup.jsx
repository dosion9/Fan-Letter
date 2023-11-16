import React from "react";
import Input from "components/ui/Input";
import theme from "style/Theme";
import { v4 as uuidv4 } from "uuid";

function InputGroup({ $state, $onChange }) {
  return (
    <section>
      <h1>Input</h1>

      {Object.keys(theme.color).map((n, i) => {
        return <Input $placeholder={"하하하하"} $value={$state} $onChange={$onChange} $color={n} key={`input${i}`} />;
      })}
    </section>
  );
}

export default InputGroup;
