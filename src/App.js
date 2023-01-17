import React from 'react';
import './App.css';
import MQTTConnect from './components/MQTT_Connector/'

function App() {
  return (
    <div className="App">
      <div class="scrollbar" id="style-7">
				<div class="force-overflow">
          <h3 >MQTT-Reactjs Application</h3>
      <MQTTConnect />
      </div>
			</div>
    </div>
  );
}

export default App;
