import React from 'react'
import Layout from '../components/Layout'
import ClashingColors from '../components/ClashingColors'
import {graphql} from 'gatsby'


export const query = graphql`
    query PoliticianPage($id: String!) {
        apiJson(id: {eq: $id}) {
        party
        viewrshipStats {
            brief {
            aggregateViews
            viewsPerLive
            }
            full {
            date
            duration
            views
            }
        }
        name
        }
    }
`

export default function PoliticianPage({data}) {
    return (
        <Layout>
            <ClashingColors
                
                headerText={data.apiJson.party}
                subheaderText={data.apiJson.name}
            />
        </Layout>
    )
}