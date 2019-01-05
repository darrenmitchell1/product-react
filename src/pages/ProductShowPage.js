import React, {Component} from 'react';
import ProductShow from '../components/ProductShow';

class ProductShowPage extends Component {
    render() {
        return (
    		<ProductShow productID={this.props.match.params.id} />
      );
    }
}

export default ProductShowPage;
