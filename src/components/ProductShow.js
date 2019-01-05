import React, {Component} from 'react';
import axios from 'axios';

class ProductShow extends Component {
    constructor(props){
      super(props)
      this.state = {
        product: []
      }
    }
    componentDidMount(){
      axios.get('http://www.product-laravel.com/api/products/' + this.props.productID)
      .then(res => {
        this.setState({ product: res.data });
      })
      .catch(error => alert(error))
    }
    render() {
        return (
        	<div className="flex-center position-ref full-height">

        		<div className="content">

		            <div className="float-e-margins">
		    
					    <div className="row">
					        <div className="col-md-12">
					            <h2>View Product</h2>
					        </div>
					        <div className="col-md-12  text-right">
					            <a className="btn btn-sm btn-primary pull-right" href="/products">Product List</a>
					        </div>
					    </div>

					    <div className="content">

					        <div className="row">
					            <div className="col-md-12">
					                <div className="col-md-4">
					                    <h4>Picture:</h4>
					                </div>
					                <div className="col-md-8">
						                <img
									      src={this.state.product.picture}
									      alt={this.state.product.name}
									      height="50" width="50"
									    />
					                </div>

					            </div>
					        </div>
					        
					        <div className="row">
					            <div className="col-md-12">
					                <div className="col-md-4">
					                    <h4>Name:</h4>
					                </div>
					                <div className="col-md-8">
					                    <h4><strong>{this.state.product.name}</strong></h4>
					                </div>

					            </div>
					        </div>
					                            
					        <div className="row">
					            <div className="col-md-12">
					                <div className="col-md-4">
					                    <h4>Price:</h4>
					                </div>
					                <div className="col-md-8">
					                    <h4><strong>{this.state.product.price}</strong></h4>
					                </div>

					            </div>
					        </div>
					                            
					        <div className="row">
					            <div className="col-md-12">
					                <div className="col-md-4">
					                    <h4>Description:</h4>
					                </div>
					                <div className="col-md-8">
					                    <h4><strong>{this.state.product.description}</strong></h4>
					                </div>

					            </div>
					        </div>
					    </div>   
					</div>
				</div>
			</div>
      );
    }
}

export default ProductShow;
