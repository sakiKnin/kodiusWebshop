import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products =[
	{ id:1, name: 'Smart Hub', price:'49.99EUR', description: 'Alexa standard'},
	{ id:2, name: 'Motion Sensor', price:'24.99EUR', description: 'Alexa standard'},
	{ id:3, name: 'Wireless Camera', price:'99.99EUR', description: 'Alexa standard'},
	{ id:4, name: 'Smoke Sensor', price:'19.99EUR', description: 'Alexa standard'},
	{ id:5, name: 'Water Leak Sensor', price:'14.99EUR', description: 'Alexa standard'}
]

const Produtcs = () => {
	return(
		<main>
			<Grid container justify="center" spacing={4}>
				{produtcs.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	)
}

export default Products
