
import {Route} from "react-router-dom";
import Homepage from"./pages/homePage";
import Chatpage from "./pages/chatPage";
import './App.css';


function App() {
  return (
  <div className="App">
  <Route path="/" component={Homepage} exact/> 
  <Route path="/chats" component={Chatpage}/>
   </div>
  );
}

export default App;
