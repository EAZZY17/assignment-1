
function IngredientsList({ items }) {

    console.log(items);
    return(
        <>
            <h1>Ingredients List</h1>
            <ul>
                {items.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </>
    );
}

export default IngredientsList;