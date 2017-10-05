import React from 'react';

import './DetailView.css';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default (props) => (
	<Card className='detailView' >

		<CardMedia
			overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}
		>
			<img src={props.img} alt={props.title} />
		</CardMedia>
		
		{props.description}
	</Card>
)