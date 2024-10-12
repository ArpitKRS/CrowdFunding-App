// import {client} from './client'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import {ThirdwebProvider} from '@thirdweb-dev/react'
import {Sepolia} from '@thirdweb-dev/chains'
import App from "./App"
import { StateContextProvider } from './context';
import './index.css'

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider clientId={"903b0d9f2e21e2e6371101b79660cc6c"} activeChain={Sepolia} supportedWallets={['injected', 'injected:metamask']}>
        <Router>
            <StateContextProvider>
                <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)