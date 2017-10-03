import React from 'react';

import './DetailView.css';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default (props) => (
	<Card className='detailView' >
		<CardHeader
			title={props.title}
			subtitle={props.subtitle}
			avatar={props.img}
		/>
		<CardMedia
			overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}
		>
			<img src={props.img} alt={props.title} />
			</CardMedia>
			<CardTitle title={props.title} subtitle={props.subtitle} />
			
			{props.description}

	</Card>
)