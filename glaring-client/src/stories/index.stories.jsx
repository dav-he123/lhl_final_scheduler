
import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";
import Event from "../components/Event/Index";


// storiesOf("Button", module)
//   .addParameters({
//     backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
//   })
//   .add("Base", () => <Button>Base</Button>)
//   .add("Confirm", () => <Button confirm>Confirm</Button>)
//   .add("Danger", () => <Button danger>Cancel</Button>)
//   .add("Clickable", () => (
//     <Button onClick={action("button-clicked")}>Clickable</Button>
//   ))
//   .add("Disabled", () => (
//     <Button disabled onClick={action("button-clicked")}>
//       Disabled
//     </Button>
//   ));

  storiesOf("Event", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  }) 
  .add("Event", () => <Event />)