import { useState } from "react";
import Context from "./context";
function Loginstate(props) {
  const intial = [
    { title: "haelllo", describe: "i can talk i can walk" },
    {
      title: "dfkjd",
      describe: "i can talk i can walk"
    }
  ];
  const [state, setstate] = useState(intial);
  return (
    <Context.Provider value={{ state, setstate }}>
      {props.children}
    </Context.Provider>
  );
}

export default Loginstate;
