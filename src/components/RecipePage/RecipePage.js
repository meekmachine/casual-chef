import React from "react";
import RecipeCards from "../RecipeCards"

class RecipePage extends React.Component {
	render () {
		return (
			<h1>Your recipes are ready!</h1>
			<RecipeCards />
			)
	}
}

export default RecipePage;