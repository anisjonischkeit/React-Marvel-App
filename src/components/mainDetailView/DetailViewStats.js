import React from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const styles = {
	listHeader: {
		textTransform: 'capitalize'
	},
	listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

export default class DetailViewStats extends React.Component {

	render() {
		return (
			<div style={styles.listRoot}>
					{Object.keys(this.props.stats).map(key => {
						const stat = this.props.stats[key]
						if (stat.items.length > 0) {
							return (
								<Paper key={key} style={{width: 350, margin: 10}}>
									<List>
										<Subheader style={styles.listHeader}>{key}</Subheader>
										{this.props.stats[key].items.map(item => (
											<ListItem
											key={item.resourceURI}
											primaryText={item.name}
											onClick={this.props.stats[key].onClickHandler.bind(undefined, item.resourceURI)}
											/>
										))}
										</List>
								</Paper>
							)
						} else {
							return null
						}
						
					})}
			</div>
		)
	}
}