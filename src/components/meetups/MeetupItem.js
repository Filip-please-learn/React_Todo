import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favortieCtx = useContext(FavoritesContext);

  const itemIsFavorite = favortieCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favortieCtx.removeFavorite(props.id);
    } else {
      favortieCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
