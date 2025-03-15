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

            {stadiums.length > 0
                ? stadiums.map(stadium => <ItemCatalogStadium key={stadium._id} {...stadium} />)
                : <h3 className="no-articles">No stadiums yet</h3>
            }
        </section>
    )
}