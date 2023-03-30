import * as React from "react";
import Switch from "@mui/material/Switch";

export default function SwitchesSize({ label }) {
  const labelInput = { inputProps: { "aria-label": label } };
  return (
    <div>
      <Switch {...labelInput} defaultChecked size="small" />
    </div>
  );
}
