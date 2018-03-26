import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Vegetarian Pizza",
        instructions: "Arizmendi's on Lakeshore",
        ingredients: ["dough", "olive oil", "veggies"],
        img: "http://pixel.nymag.com/imgs/slideshows/2013/02/sf-pizza/arizmendi-pizza.nocrop.w670.h458.jpg"
      },
      {
        title: "Fried Chicken Sandwich",
        instructions: "Proposition Chicken",
        ingredients: ["roll", "chicken", "slaw"],
        img: "https://igx.4sqi.net/img/general/699x268/44047_mter5vvIfpH9WO3zQA91nLpIa0lwDhMQ1hqwIIg42dg.jpg"
      },
      {
        title: "Sushi",
        instructions: "Kusakabe",
        ingredients: ["fish", "rice", "love"],
        img: "http://ww2.hdnux.com/photos/44/51/63/9608425/3/1000x800.jpg"
      },
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipes = this.props.recipes.map((spot, idx) => {
      return <Recipe key={idx} {...spot} />
    });

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
