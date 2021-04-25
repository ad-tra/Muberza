import React from 'react'
import Layout from '../components/Layout'
import ClashingColors from '../components/ClashingColors'
import {graphql} from 'gatsby'


export const query = graphql`
    query PoliticianPage($slug: String!) {
        politiciansJson(slug: { eq: $slug }) {
            briefDiscrp
            party
            name
        }
    }
`

export default function PoliticianPage({data}) {
    return (
        <Layout>
            <ClashingColors
                headerText={data.politiciansJson.party}
                subheaderText={data.politiciansJson.name}
            />
        </Layout>
    )
}