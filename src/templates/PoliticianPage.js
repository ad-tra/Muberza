import React from 'react'
import dayjs from 'dayjs'
import {graphql} from 'gatsby'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Layout from '../components/Layout'

export const query = graphql`
    query PoliticianPage($id: String!) {
        apiJson(id: {eq: $id}) {
        party
        viewershipStats {
            brief {
            aggregateViews
            viewsPerLive
            }
            full {
            timestamp
            duration
            views
            }
        }
        name
        }
    }
`
// cSpell:disable


export default function PoliticianPage({data}) {
    
    return (
        <Layout className = {`politician_page nav--${data.apiJson.party} `}>
            
            <div className = {`pp--${data.apiJson.party}`}>
                <div className="headers_container">
                    <h1 dir ="rtl">{data.apiJson.name}<span className = "emphasis">50 </span>مليون مشاهدة في 2021  </h1>
                    <p dir = "rtl">لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،  وسأعرض لك التفاصيل لتكتشف حقيقة  وأساس  تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
                </div> 
            
                {/* ~~Chart.js~~ :( Chart goes here*/}        
                <ResponsiveContainer className="chart_container" width={700} height={700}>
                    <AreaChart width={500} height={400} data={data.apiJson.viewershipStats.full} margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
      
                      <XAxis dataKey="timestamp" domain={['dataMin', 'dataMax']}  type="number" tickCount={3}  interval="preserveStartEnd" tickFormatter={tickText=> new dayjs(tickText * 1000).format("MMM,YYYY")}/>
                      <YAxis dataKey="views" interval= "preserveStartEnd"/>
                      <CartesianGrid strokeDasharray="3 3 " horizontal={true} vertical={true} />
                      <Tooltip />
                      <defs>
                        <linearGradient id={`degrade`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="20%"  stopOpacity={1}/>
                          <stop offset="100%"  stopOpacity={1}/>
                        </linearGradient>
                      </defs>
  
                      <Area id= "stroke_main"  type="cardinal" dataKey="views" fillOpacity={1} fill={`url(#degrade)`}  />
                    </AreaChart>
                </ResponsiveContainer>


                <div className="ta7lil_container">
                    <h3>تحليل فني</h3>
                    <p>لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،  وسأعرض لك التفاصيل لتكتشف حقيقة  وأساس  تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>
                </div>
            </div>
            
        </Layout>
    )
}
