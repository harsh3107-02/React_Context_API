import { createContext, useContext } from "react";
import Context from "../context/context";
import Card from "./card/card";

function About() {
  const a = useContext(Context);
  const { state, usestate } = a;
  return (
    <div>
      {state.map((data) => {
        return <Card note={data} />;
      })}
    </div>
  );
}
export default About;
