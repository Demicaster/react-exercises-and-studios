import styles from "./Description.module.css";
import React from 'react';

const RecipeAuthor = () =>  {
    let authorLink ="https://hot-thai-kitchen.com/pad-see-ew-new/";
    let authorName = "Pailin Chongchitnant";
    let authorPhoto = "https://hot-thai-kitchen.com/wp-content/uploads/2021/01/Untitled-design-2-720x405.png";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Pailin's Kitchen" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Hot Thai Kitchen</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render() {
        return (
         <div> 
            <div>
                 <h1>Recipe Title</h1>
             <p>Short recipe description</p>
   </div>
   <RecipeAuthor />
</div>
        )
    }

}

export default RecipeDescription;