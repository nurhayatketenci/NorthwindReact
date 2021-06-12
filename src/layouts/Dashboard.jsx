import React from 'react'
import Categories from './Categories'
import { Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'
import ProductList from "../pages/ProductList";
import { Route } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />

                    </GridColumn>
                </GridRow>
            </Grid>
        </div>

    )
}
