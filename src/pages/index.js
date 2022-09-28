import './index.css'
import 'antd/dist/antd.min.css'
import {Layout } from 'antd';
import React from 'react';
import StarHeader from './layout/StarHeader';
import StarContent from './layout/StarContent';

const {Content, Footer } = Layout;


function Index() {
  return (
   <>
 <Layout style={{height:"100%",  background:"#080C17"}}>
   <StarHeader></StarHeader>
   <Content
      className="site-layout"
      style={{
        padding: '0px 50px',
        marginTop: 64,
      }}
    >
    
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 480,
        }}
      >
        <StarContent></StarContent>
      </div>
    </Content>
    
  </Layout>
   </>
  )
}

export default Index