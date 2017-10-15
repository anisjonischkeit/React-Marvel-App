import React from 'react';

import './DetailView.css';

import { Card, CardMedia, CardTitle } from 'material-ui/Card';

export default (props) => (
	<Card className='detailViewCard'>
		<CardMedia
			overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}
		>
			<img src={props.img} alt={props.title} />
		</CardMedia>
		{props.description}
	</Card>
)