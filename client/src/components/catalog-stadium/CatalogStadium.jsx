import ItemCatalogStadium from "./item-catalog-stadium/ItemCatalogStadium"
import { useStadiums } from "../../api/stadiumApi"

export default function CatalogStadium() {
    
    const { stadiums } = useStadiums()

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