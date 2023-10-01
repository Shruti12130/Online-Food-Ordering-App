import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

  const dispatch = useDispatch();

  const handleItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  }

	return (
    <div>
			{
				items.map((currItem) => (
					<div key={currItem.card.info.id} className="menu-items">
						<div className="menu-text">
							<span>
							<b> { currItem.card.info.name } </b> - ₹ { currItem.card.info.price/100 || currItem.card.info.defaultPrice/100 }
							</span>
							<p>
								<small>
									{currItem.card.info.description}
								</small>
							</p>
						</div>
						<div className="img-container">
						  <div className="add">
								<button className="add-btn" onClick={() => handleItem(currItem)}>
									Add +
								</button>
							</div>
							{currItem.card.info.showImage ? (
								<img src={CDN_URL + currItem.card.info.imageId} />)
								: (<div></div>)
							}
						</div>
					</div>
				))
					
			}
    </div>
  )
}

export default ItemList;