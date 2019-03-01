import React, { Component, PureComponent } from 'react';

import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

const styles = {
  grid: {
    gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
  }
}

const GridRespon = () => {
  return (
    <Fragment>
      <List
        grid={styles.grid}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>
              Card content
            </Card>
          </List.Item>
        )}
      />,
    </Fragment>
  )
}

export default GridRespon
