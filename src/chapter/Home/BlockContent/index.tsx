import React, { FC } from 'react'
import { Typography } from 'antd'
import styles from './index.module.css'

type IProps = {
  title: string
  extra?: JSX.Element
}

const BlockContent: FC<IProps> = ({ title, children, extra }) => {
  return (
    <div className={styles.blockContent}>
      <Typography.Title level={2} style={{ fontWeight: 'lighter', color: '#314659' }}>
        {title}
        {extra && <div className={styles.blockContentExtra}>{extra}</div>}
      </Typography.Title>
      {children}
    </div>
  )
}

export default BlockContent