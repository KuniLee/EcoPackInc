import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useWebSocket from "react-use-websocket";

type WSDataType = {
    temp: number
}

function App() {
    const [count, setCount] = useState(0)
    const {lastJsonMessage} = useWebSocket<WSDataType>(`ws://${window.location.hostname}:1880/ws/test`, {
        onOpen: () => console.log('opened'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    })
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div>Temp: {lastJsonMessage?.temp}°C</div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code>
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
