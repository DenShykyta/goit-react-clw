import { PageTitle } from "./components/PageTitle/PageTitle";
import { EventsBoard } from "./components/EventsBoard/EventsBoard";
import eventsData from './events.json';

export const App = () => {
  return (<div>
    <PageTitle text="224th Core Worlds Coalition Conference" />
    <EventsBoard events={eventsData} />
  </div>
  );

};






















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
