import React from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Button } from 'antd'
import GreatContent from './GreatContent'
import 'antd/dist/antd.css';  // 引入样式相当于全局引入，会污染
import styles from './index.module.css';

function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <h2 className={styles.bannerTitle}>陌尘的小私橱</h2>
      <p className={styles.bannerDescription}>创造高效愉悦的工作体验</p>
      <div className={styles.bannerButtons}>
        <Link to="/docs/component/graph-editor/introduction">
          <Button type="primary" size="large" shape="round">开始使用</Button>
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Banner />
      <div style={{ maxWidth: '1356px', margin: '0px auto' }}>
        <GreatContent />
      </div>
    </Layout>
  );
}