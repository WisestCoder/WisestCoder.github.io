import React, { useState } from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Advertising() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div style={{ padding: '30px 60px' }}>
        <h2>诚招广告位</h2>
        <p>微信</p>
        <p>
          <img src='img/wechat.png' style={{ width: 200 }} />
        </p>
        <p>邮箱：dushao103500@163.com</p>
      </div>
    </Layout>
  );
}