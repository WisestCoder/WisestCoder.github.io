import React, { FC } from 'react'
import { Col, Card } from 'antd'
import Link from '@docusaurus/Link';

type IProps = {
  title: string
  img: string
  description: string
  href?: string
  link?: string
}

const MiniPanel: FC<IProps> = ({
  title,
  img,
  description,
  href,
  link,
}) => {
  let content = (
    <Card
      hoverable
      className="design-mini-panel"
      cover={<img alt={typeof title === 'string' ? title : 'Hitu'} src={img} />}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );

  if (href) {
    content = (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  } else if (link) {
    content = <Link to={link}>{content}</Link>;
  }

  return (
    <Col xs={24} sm={8}>
      {content}
    </Col>
  );
};

export default MiniPanel