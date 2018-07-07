import React from "react";
import "./Homepage.css";

class Homepage extends React.Component {
    render () {
        return <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="masthead mb-auto">
              <div className="inner">
                <h3 className="masthead-brand">Casual Chef</h3>
              </div>
            </header>
            <main role="main" className="inner cover">
              <h1 className="cover-heading">
                Leave the takeout for another day.
              </h1>
              <p className="lead">
                Casual Chef is MERN app that makes it easier for people
                to meal prep and plan their grocery list. Users will be
                able to slect which ingredients tickle their fancy, save
                recipes to their profile, and add ingredients to a
                shopping list.
              </p>
              <p className="lead">
                <a href="/recipes" className="btn btn-lg btn-secondary">
                  Learn more
                </a>
              </p>
            </main>
          </div>;
    }
}


export default Homepage;