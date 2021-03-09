import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <BTProductItem />
                </div>
                <div className="col-3">
                    <BTProductItem />
                </div>
                <div className="col-3">
                    <BTProductItem />
                </div>
                <div className="col-3">
                    <BTProductItem />
                </div>

            </div>
        )
    }
}
