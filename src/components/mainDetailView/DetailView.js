import React from 'react';

import './DetailView.css';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Detail from 'components/masterDetail/Detail'

export default (props) => (
	<Detail onBackClick={props.onBackClick}>
		<Card>

			<CardMedia
				overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}
			>
				<img src={props.img} alt={props.title} />
			</CardMedia>
			
			{props.description}
		</Card>
	</Detail>
)