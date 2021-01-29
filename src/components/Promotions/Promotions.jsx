import React, {useState, useEffect} from 'react'

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
 
import useStyles from './styles'

const Promotions = ({cart, handlePromotion, promotion}) => {

	const classes =useStyles()

	let setProm1 = () => {
		 
		handlePromotion(["20off"])
		}

	const removeProm1 = () => {
		 
		handlePromotion([])
		
	}

	const setProm2 = () => {
		
		if(promotion.length) promotion=["20eur", "5off"]
		else promotion=["5off"]
		handlePromotion(promotion)

	}

	const removeProm2 = () => {
		if(promotion.length===2){ 
			promotion=[]
			promotion[0]="20eur"
		}else promotion=[]
		handlePromotion(promotion)

	}

	const setProm3 = () => {
		if(promotion.length) promotion=["5off","20eur"]
		else promotion=["20eur"]
		handlePromotion(promotion)

	}

	const removeProm3 = () => {
		if(promotion.length===2){
			promotion=[]
			promotion[0]="5off"
		}else promotion=[]
		handlePromotion(promotion)

		}

	return (
		<>
		<Typography variant="h3" color="primary">Promotions</Typography>

		<Card className={classes.root}>
			<div className={classes.cardContent}>
			<CardContent>
			<Typography variant="h5" gutterBottom>20%OFF, cannot be used in conjunction with other codes</Typography>
			</CardContent>
			{  (!promotion.length || promotion.length==1 && promotion[0]=="20off") && (
			<CardActions className={classes.cardActions}>
				{ !promotion.length ? (
				<IconButton aria-label="Add to Cart" color="primary" onClick={()=>{setProm1()}}>
					 add 20%OFF code
				</IconButton>):
				(<IconButton aria-label="Add to Cart" color="secondary" onClick={()=>{removeProm1()}}>
					 remove 20%OFF code
				</IconButton>
				)}
			</CardActions> 
			)}
			</div>

		</Card>
		<Card className={classes.root}>
			<div className={classes.cardContent}>
			<CardContent>
			<Typography variant="h5" gutterBottom>5%OFF, can be used in conjunction with other codes</Typography>
			</CardContent>
			{ (!promotion.length || (promotion[0]!="20off")) && (
			<CardActions className={classes.cardActions}>
				{ (!promotion.length || (promotion.length==1 && promotion[0]!="5off")) ?
				(<IconButton aria-label="Add to Cart" color="primary" onClick={()=>{setProm2()}}>
					 add 5%OFF code
				</IconButton>):
				(<IconButton aria-label="Add to Cart" color="secondary" onClick={()=>{removeProm2()}}>
					 remove 5%OFF code
				</IconButton>)
				}
			</CardActions> 
			)}
			</div>

		</Card>
		<Card className={classes.root}>
			<div className={classes.cardContent}>
			<CardContent>
			<Typography variant="h5" gutterBottom>20eur OFF, can be used in conjunction with other codes</Typography>
			</CardContent>
			{ (!promotion.length || promotion[0]!="20off") && (
			<CardActions className={classes.cardActions}>
				{ (!promotion.length || (promotion.length==1 && promotion[0]!="20eur")) ?
				(<IconButton aria-label="Add to Cart" color="primary" onClick={()=>{setProm3()}}>
					 add 20eur off code
				</IconButton>):
				(<IconButton aria-label="Add to Cart" color="secondary" onClick={()=>{removeProm3()}}>
					 remove 20eur off code
				</IconButton>)
				}
			</CardActions> 
			)}
			</div>

		</Card>

		</>

		)

}

export default Promotions
