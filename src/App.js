import "./styles.css";
import React from "react";
import TiredMeter from "./components/TiredMeter";
import Clock from "./components/Clock";
import RandRoll from "./components/RandRoll";
import UserName from "./components/UserName";

export default class App extends React.Component {
  state = { tired: 15 };

  render() {
    return (
      <div classname="app">
        <h1> Hello Masochists</h1>
        <TiredMeter importance={"Critical"} />
        <Clock />

        <RandRoll />
        <UserName />
      </div>
    );
  }
}

// export default function App() {
//   let tired = 15;

//   return (
//     <div className="App">
//       <h1>Heckin Hello</h1>
//       <h2> I am level {tired} tired</h2>
//     </div>
//   );
// }
