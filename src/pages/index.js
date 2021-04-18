import React from 'react'
import PoliticianCard from '../components/PoliticianCard.js'
import style from '../styles/global.scss'
import { graphql, useStaticQuery } from 'gatsby'
import ClashingColors from '../components/ClashingColors.js'
import BtnSwipUp from '../components/BtnSwipUp.js'
import Layout from '../components/Layout.js'

export default function Home({ data }) {
    const polisArr = useStaticQuery(
        graphql`
            query MyPolis {
                allPoliticiansJson(sort: { fields: party }) {
                    edges {
                        node {
                            briefDiscrp
                            briefStats {
                                key
                                value
                            }
                            name
                            party
                            thumbImage {
                                childrenImageSharp {
                                    gatsbyImageData(placeholder: NONE)
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout> 
            <ClashingColors
            headerText="مــــــبـــا ر ز ة"
            subHeaderText="عبير كونتر سـيــف. إتلاف كونتر كرامة هي مبارزة يـتفرجو فيها مـلاين توانسا على Facebook Lives. زعما شكون ر ابـح الطرح؟ شكون عندو نسب مشاهدة أعلـى؟ تزحلق اللوطة و اتعرف على الأرقام.">
                
                <BtnSwipUp hrefText = "تـزحلق اللوطة"/>
            
            </ClashingColors>

            {polisArr.allPoliticiansJson.edges.map((edge) => {return <PoliticianCard polisNode={edge.node} />})}
        </Layout>
    )
}
