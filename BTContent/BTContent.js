import React, { Component } from 'react'
import BTCarousel from './BTCarousel/BTCarousel'
import BTProductList from './BTProductList/BTProductList'

export default class BTContent extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: "5rem" }}
            >
                <BTCarousel />
                <BTProductList />
            </div >
        )
    }
}
