import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'shoes', description: 'Sport Shoes' , price:'10$', image:'https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9285-_2_360x.jpg?v=1614082806' },
    { id: 2, name: 'T-shirts', description: 'Man Shirts', price:'5$', image:'https://i.pinimg.com/originals/66/d5/de/66d5de38749e52db946dab7f013d737e.jpg'},
]

const Products = ({products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
           <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product) =>
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    )
                }
            </Grid>

        </main>
    );
}

export default Products;