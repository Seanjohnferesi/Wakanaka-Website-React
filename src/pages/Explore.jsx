import "../styles/explore.css"
import { categories } from "../utils/data.js"

function Explore () {
    return(
        <>  
            <section className="category-container">
                {categories.map(category => 
                    <div className="category" key={category.id}>
                        <h2>{category.title}</h2>
                    </div>
                )}
            </section>
        </>
    )
}

export default Explore