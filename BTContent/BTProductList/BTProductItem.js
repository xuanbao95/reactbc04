import React, { Component } from 'react'

export default class BTProductItem extends Component {
    render() {
        return (
            <div className="card h-100 text-center">
                <img className="card-img-top" src="http://picsum.photos/1000/1000" alt />
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>

        )
    }
}
