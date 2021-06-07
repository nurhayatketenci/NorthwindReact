import React from 'react'
import Categories from './Categories'
import { Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'
import ProductList from "../pages/ProductList";

export default function Dashboard() {
    return (
        <div>
       <Grid>
           <GridRow>
               <GridColumn width={4}>
               <Categories/>
               </GridColumn>
               <GridColumn width={12}>
               <ProductList/> 
               </GridColumn>
           </GridRow>
       </Grid>
         </div>
          
    )
}
