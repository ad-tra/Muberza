import React from 'react'
import dayjs from 'dayjs'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Layout from '../components/Layout'
const data = [
  {
    time: 1621442646144,
    uv: 4000,
    pv: 2400,
    amt: 2403,
  },
  {
    time: 1621443646144,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    time: 1621444646144,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    time: 1621445646144,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    time: 1621446646144,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    time: 1621447646144,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    time: 162448646144,
    uv: 3489,
    pv: 4299,
    amt: 2099,
  },
];


export default function templatePP() {
    return (
        <Layout className = "politician_page nav--dostouri pp--dostouri">
            
            <div className="headers_container">
                <h1 dir ="rtl"><span className = "emphasis">50 </span>مليون مشاهدة في 2021 برك </h1>
                <p dir = "rtl">لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،  وسأعرض لك التفاصيل لتكتشف حقيقة  وأساس  تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
            </div> 
        
            {/* ~~Chart.js~~ :( Chart goes here*/}        
            <ResponsiveContainer className="chart_container" width={600} height={500}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" domain={["auto","auto"]} scale="time" type="number" tickFormatter = {unixTime=> dayjs(unixTime).format("MMM D")}/>
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>


            <div className="ta7lil_container">
                <h3>تحليل فني</h3>
                <p>لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،  وسأعرض لك التفاصيل لتكتشف حقيقة  وأساس  تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>
            </div>
        </Layout>
    )
}
/*
change font to meral
change color to red--light
add XD matching gradient for area.

*/