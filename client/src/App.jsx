import { useState } from 'react'
import { Route, Routes } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CatalogStadium from './components/catalog-stadium/CatalogStadium'
import CreateStadium from './components/create-stadium/CreateStadium'
import DetailsStadium from './components/details-stadium/DetailsStadium'
import EditStadium from './components/edit-stadium/EditStadium'
import './App.css'

function App() {
    const [authData, setAuthData] = useState({})

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    return (
        <>
            <div className="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/stadiums" element={<CatalogStadium />} />
                        <Route path="/stadiums/:stadiumId/details" element={<DetailsStadium email={authData.email} />} />
                        <Route path="/stadiums/:stadiumId/edit" element={<EditStadium />} />
                        <Route path="/stadiums/create" element={<CreateStadium />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
