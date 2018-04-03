import React from 'react';

import './DetailView.css';

import { Card, CardMedia, CardTitle } from 'material-ui/Card';

type PropsType = {
  title: string,
  subtitle: string,
  img: string,
  children: React$Node,
}

export default (props : PropsType) => (
  <Card className='detailViewCard'>
    <CardMedia
      overlay={<CardTitle title={props.title} subtitle={props.subtitle} />}
    >
      <img src={props.img} alt={props.title} />
    </CardMedia>
    {props.children}
  </Card>
)