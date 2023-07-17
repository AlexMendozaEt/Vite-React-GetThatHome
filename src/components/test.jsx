import { useTheme } from "@emotion/react";

import { useState } from "react";

export default function Test() {
  const [error, SetError] = useState(true);
  const theme = useTheme();

  return (
    <>
      {error ? (
        <div style={{ color: theme.colors.red[500] }}>Hi</div>
      ) : (
        <div>Hi</div>
      )}
    </>
  );
}
