import React from 'react'
import {graphql, navigate} from 'gatsby'

import Layout from '../components/Layout'
import LineChartWrapper from '../components/LineChartWrapper'
import {numFormatter} from '../components/Utils'


export default function PoliticianPage({data}) {

    const politician = data.politiciansJson;
    return (
        <Layout className = {`politician_page layout--${politician.party} `}>
            
            <div className = {`pp--${politician.party}`}>
                <div className="headers_container">
                    <h1 dir ="rtl">{politician.name} تحقق {numFormatter(politician.viewershipStats.brief.aggregateViews)} مشاهدة   </h1>
                    <p dir = "rtl">لكن لا بد أن أوضح لك أن كل هذه الأفكار لمغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل،  وسأعرض لك التفاصيل لتكتشف حقيقة  وأساس  تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
                </div> 
            
                   
                
                <div className= "chart_wrappers_container">
                    <LineChartWrapper 
                        title="عدد مشاهدات اللايفز في كل شهر"
                        dataSourceMacro = {politician} dataSource = "condensed"
                        XAxisDataKey = "startTimestamp"
                        YAxisDataKey = "views"
                    />
                    
                    <LineChartWrapper 
                        title = "مجموع مشاهدات كل اللايفز"
                        dataSourceMacro = {politician} dataSource = "condensed"
                        XAxisDataKey = "startTimestamp"
                        YAxisDataKey = "viewsSinceStart"
                    />
                    {/*
                                        <LineChartWrapper 
                        title = "معدل مشاهدات اللايف في كل شهر"
                        dataSourceMacro = {politician} dataSource = "condensed"
                        XAxisDataKey = "startTimestamp"
                        YAxisDataKey = "avgViewsPerLive"
                    />
                    */}


                </div>

                <div className="ta7lil_container">
                    <h3>تحليل فني</h3>
                    <p>لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل،  وسأعرض لك التفاصيل لتكتشف حقيقة  وأساس  تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.</p>
                </div>

                <button className="button_butt" style={{margin:"0 auto",  display:"block"}} onClick={()=>{navigate(-1)}}>Go Back</button>
            </div>
            
        </Layout>
    )
}

export const query = graphql`
    query PoliticianPage($id: String!) {
        politiciansJson(id: {eq: $id}) {
        party
        name
        viewershipStats {
            brief {
                aggregateViews
                viewsPerLive
            }
            condensed{
                startTimestamp
                endTimestamp
                views
                viewsSinceStart
                avgViewsPerLive
            }
            full {
                timestamp
                duration
                views
                viewsSinceStart
            }
        }
        
        }
    }
`