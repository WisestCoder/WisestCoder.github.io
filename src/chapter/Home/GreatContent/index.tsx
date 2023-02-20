import React from 'react'
import { Row, Col } from 'antd'
import Link from '@docusaurus/Link';
import BlockContent from '../BlockContent'
import MiniPanel from '../MiniPanel'
import { MINI_LIST } from '../../../utils/constant'

import styles from './index.module.css'

export default function GreatContent() {
  return (
    <BlockContent title="海量内容">
      <Row gutter={[40, 0]}>
        <Col span={12}>
          <div
            className={styles.card}
            style={{
              backgroundColor: '#E6F1FF',
              backgroundImage:
                'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*0oaHSYRcnT4AAAAAAAAAAABkARQnAQ)',
            }}
          >
            <h3>组件</h3>
            <ul>
              <li><Link to="/docs/component/graph-editor/introduction">图形编辑器</Link></li>
              <li><Link to="/docs/component/schema-generator/introduction">表单设计器</Link></li>
            </ul>
          </div>
        </Col>
        <Col span={12}>
          <div
            className={styles.card}
            style={{
              backgroundColor: '#DEF6FF',
              backgroundImage:
                'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*TLJTT78n7rMAAAAAAAAAAABkARQnAQ)',
            }}
          >
            <h3>脚手架</h3>
            <ul>
              <li><Link to="/docs/tools/ols/index">OLS</Link></li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row
        style={{ marginTop: 40 }}
        gutter={[
          { xs: 32, sm: 40 },
          { xs: 32, sm: 40 },
        ]}
      >
        {MINI_LIST.map((panel, index) => (
          <MiniPanel key={`${panel.title}_${index}`} {...panel} />
        ))}
      </Row>
    </BlockContent>
  )
}