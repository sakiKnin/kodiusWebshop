import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
  console.log(checkoutToken.live, "rew")
  return(
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
 
      <Grid style={{ position: 'relative', left:'75%' }} >
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          Subtotal: {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
	{ checkoutToken.live.discount.length!==0 &&
	( 
			<Typography variant="subtitle1" style={{ fontWeight: 700 }}>
	     			Discount:-{checkoutToken.live.discount.amount_saved.formatted_with_symbol} 
        		</Typography>
	)}
	 
	<Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          	Total: {checkoutToken.live.total.formatted_with_symbol}
        </Typography>
	 
       </Grid>
	
    </List>
  </>)
};
export default Review;
