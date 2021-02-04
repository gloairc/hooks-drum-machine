import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app.css'
import App from "./App"

// ReactDOM.createRoot(document.getElementById('root')).render(<DrumMachine />);
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);