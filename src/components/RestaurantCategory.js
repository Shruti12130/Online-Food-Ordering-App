import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

	const handleClick = () => {
		setShowIndex();
	};
	
	return (
    <div className="accordion accordion-flush" onClick={handleClick}>
			<div className="accordion-item" >
				<button 
          className="accordion-button collapsed" 
          type="button" 
        >
				  <strong>
						{ data.title } ({data.itemCards.length})
					</strong>
				</button>
				{
					showItems && <ItemList items = {data.itemCards}/>
				}
			</div>
	</div>
  )
}

export default RestaurantCategory;