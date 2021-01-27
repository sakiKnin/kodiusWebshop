import React, {useState} from 'react'

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'

import useStyles from './styles'

const Promotions = ({cart, handlePromotion}) => {

	const classes =useStyles()

	const [flag, setFlag] = useState(false)
	const [flag2, setFlag2] = useState(false)
	const [flag3, setFlag3] = useState(false)

	const setProm1 = () => {
		setFlag(true)
		setFlag2(false)
		setFlag3(false)
		cart.discount_code="20off"
		console.log(cart)
		handlePromotion(cart)
		}

	const removeProm1 = () => {
		setFlag(false)
		cart.dicount_code=""
		handlePromotion(cart)
		
	}

	const setProm2 = () => {
		setFlag(false)
		setFlag2(true)
		cart.discount_code+="5off"
		console.log(cart)
		handlePromotion(cart)

	}

	const removeProm2 = () => {
		setFlag2(false)
		cart.discount_code=""
		console.log(cart)
		handlePromotion(cart)

	}

	const setProm3 = () => {
		setFlag(false)
		setFlag3(true)
		cart.discount_code+="20euroff"
		console.log(cart)
		handlePromotion(cart)

	}

	const removeProm3 = () => {
		setFlag3(false)
		cart.discount_code=""
		console.log(cart)
		handlePromotion(cart)

		}

	return (
		<>
		<Typography variant="h3" color="primary">Promotions</Typography>

		<Card className={classes.root}>
			<div className={classes.cardContent}>
			<CardContent>
			<Typography variant="h5" gutterBottom>20%OFF, cannot be used in conjunction with other codes</Typography>
			</CardContent>
			{ !flag2 && !flag3 && (
			<CardActions className={classes.cardActions}>
				{ !flag ? (
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
			{ flag===false && (
			<CardActions className={classes.cardActions}>
				{ !flag2 ?
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
			{ flag===false && (
			<CardActions className={classes.cardActions}>
				{ !flag3 ?
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
