import React from 'react'
import Layout from '../components/Layout'
import ClashingColors from '../components/ClashingColors'


export default function NotFound(){
    return (
        <Layout className= "layout--clashing_colors">
            <ClashingColors headerText="404 موش موجود" subheaderText="يا عمار سيب المقص"></ClashingColors>
        </Layout>
    )
}