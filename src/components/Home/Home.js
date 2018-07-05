import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Forget the takeout and cook at home.</p>
                <i class="fas fa-utensils"></i>
                <i class="fas fa-list-ul"></i>
                <i class="far fa-calendar"></i>
            </div>
        )

    }
}

export default Home
