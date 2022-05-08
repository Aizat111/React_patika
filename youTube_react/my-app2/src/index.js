import React from "react";
import { createRoot } from 'react-dom/client';
import Card from './components/Card'
import Collapse from "./components/Collapse";
const container = document.getElementById('root');


//const names=['Aizat','Anisa','Nurjan','Duygu'];

function App() {
  return (
    /* <div>
        {names.map(name=> (<h1>{name}</h1>))}
        <ul>
            <li>
                Elma
            </li>
            <li>
                Armut
            </li>
        </ul>
        </div>*/
    <div className="container"> 
    <div className="row">
      <div className="card-group">
      <div className="col">
      <Collapse href="collapseExample1">
       <Card 
       cardText="lorem ipsum 1"
       updatedTime="Last updated 1 minute ago"
       image="https://picsum.photos/id/1/200/300"
       />
       </Collapse>
      </div>

      <div className="col">
      <Collapse href="collapseExample2">
       <Card cardTitle="Bursaspor"
       cardText="lorem ipsum 2"
       updatedTime="Last updated 2 minute ago"
       image="https://picsum.photos/id/10/200/300"
       />
       </Collapse>
      </div>

      <div className="col">
      <Collapse href="collapseExample3">
       <Card cardTitle="Konyaspor"
       cardText="lorem ipsum 3"
       updatedTime="Last updated 3 minute ago"
       image="https://picsum.photos/id/100/200/300"
       />
       </Collapse>
      </div>
    </div>

      
      
      
       
      </div>
    </div>
  );
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
