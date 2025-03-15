import { useEffect, useState } from "react"
import stadiumService from "../../services/stadiumService"
import ItemCatalogStadium from "./item-catalog-stadium/ItemCatalogStadium"

export default function CatalogStadium() {
    const [stadiums, setStadiums] = useState([])
    useEffect(() => {
        stadiumService.getAll()
           .then(setStadiums)
    }, [])
    
    return (
        <section id="catalog-page">
            <h1>All Stadiums</h1>
            {/* Display div: with information about every game (if any) */}
            
            {stadiums.map(stadium => <ItemCatalogStadium key={stadium._id} {...stadium} />)}
            {/* Display paragraph: If there is no games */}
            <h3 className="no-articles">No stadiums yet</h3>
        </section>
    )
}