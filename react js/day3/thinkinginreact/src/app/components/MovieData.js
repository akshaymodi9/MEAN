import React from 'react'
import {MovieList} from './MovieList'
export class MovieData extends React.Component {
    render() {
    //   var rows = [];
    //   var lastCategory = null;
    //   this.props.products.forEach(function(product) {
    //     if (product.category !== lastCategory) {
    //       rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    //     }
    //     rows.push(<ProductRow product={product} key={product.name} />);
    //     lastCategory = product.category;
    //   });
      return (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Production</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  