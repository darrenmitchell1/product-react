import React, {Component} from 'react';
import axios from 'axios';

class ProductIndex extends Component {
    constructor(props){
      super(props)
      this.state = {
        products: []
      }
    }
    componentDidMount(){
      axios.get('http://www.product-laravel.com/api/products')
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(error => alert(error))
    }
    render() {
        return (
            <div className="float-e-margins">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Product List</h2>
                    </div>
                </div>

                <div className="table-responsive">
                    <table id="product-table" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.products.map(product =>
                            <tr key={product.uuid}>
                                <td>
                                    <img
                                      src={product.picture}
                                      alt={product.name}
                                      height="50" width="50"
                                    />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>

                                <a href={`/products/${product.uuid}`} className="btn btn-white btn btn-xs">Show</a></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>  
            </div>
        );
    }
}

export default ProductIndex;
