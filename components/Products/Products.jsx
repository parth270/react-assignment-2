import React from 'react';
import Product from '../Product/Product';
import classes from './Products.module.css';

const Icon=()=> {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="23"
        fill="none"
        viewBox="0 0 19 23"
      >
        <path
          stroke="#E5DFD9"
          strokeLinecap="round"
          strokeWidth="2"
          d="M1 10.78V22h16.667V10.78M9.333 15.66V2m0 0l5.417 5.417M9.333 2L3.917 7.417"
        ></path>
      </svg>
    );
  }

const Products=()=>{

    return(
        <div className={classes.container} >
            <div className={classes['product-intro']} >
                <div className={classes.left} >
                    Bags
                    <ul>
                        <li>Backpacks</li>
                    </ul>
                </div>
                <div className={classes.right}>
                    8 products <Icon/>
                </div>
            </div>
            <div className={classes['product-list']}>
                <Product src="./SIPR04018_01 1 (1).png" title="The Brown Metro Movers" />
                <Product src="./SIPR04031_01 1 (1).png" title="The Metro Movers Black" />
                <Product src="./SIPR04085_01 1.png" title="The Metro Movers Black" />
                <Product src="./SIPR04086_01 1.png" title="The Metro Movers Black" />
                <Product src="./SIPR04018_01 1 (1).png" title="The Brown Metro Movers" />
                <Product src="./SIPR04031_01 1 (1).png" title="The Metro Movers Black" />
                <Product src="./SIPR04085_01 1.png" title="The Metro Movers Black" />
                <Product src="./SIPR04086_01 1.png" title="The Metro Movers Black" />
            </div>
        </div>
    )
}
export default Products;