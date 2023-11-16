import React from "react";
import Button from "components/ui/Button";
import theme from "style/Theme";
import { v4 as uuidv4 } from "uuid";

function BtnGroup({ $size, $outline }) {
  return (
    <section>
      <h1>
        Btn Group - {$size} & {$outline}
      </h1>
      {Object.keys(theme.color).map((n) => {
        return (
          <Button $color={n} $size={$size} $outline={$outline} key={uuidv4()}>
            {n}
          </Button>
        );
      })}
    </section>
  );
}

export default BtnGroup;
