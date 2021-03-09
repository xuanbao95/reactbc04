import React, { Component } from 'react'
import BTContent from './BTContent/BTContent'
import BTProductList from './BTContent/BTProductList/BTProductList'
import BTFooter from './BTFooter/BTFooter'
import BTHeader from './BTHeader/BTHeader'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <BTContent />
                <BTFooter />
            </div>
        )
    }
}
