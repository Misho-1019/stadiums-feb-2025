import { Route, Routes } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import './App.css'

function App() {

    return (
        <>
            <div className="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
