import React from 'react'
import PoliticianCard from '../components/PoliticianCard.js'
import style from '../styles/global.scss'
import { graphql, useStaticQuery } from 'gatsby'
import ClashingColors from '../components/ClashingColors.js'
import BtnSwipUp from '../components/BtnSwipUp.js'
import Layout from '../components/Layout.js'

export default function Index () {
    const polisArr = useStaticQuery(
        graphql`
        query MyPolis {
            allApiJson(sort: {fields: party}) {
              edges {
                node {
                  briefDiscrp
                  name
                  party
                  slug
                  thumbImage {
                    childrenImageSharp {
                      gatsbyImageData(placeholder: NONE)
                    }
                  }
                  viewrshipStats {
                    brief {
                      aggregateViews
                      viewsPerLive
                    }
                  }
                }
              }
            }
          }
        `
    )

    return (
        <Layout className="nav--karama"> 
            <ClashingColors
            headerText="مــــــبـــا ر ز ة"
            subheaderText="بوق في البرلمـــان و مبارزة في المطار. عبير كونتر سـيــف هو طـــرح يـتفرجو فيها مـلاين توانسا على Facebook Lives. زعما شكون ر ابـح الطرح؟ شكون عندو نسب مشــاهدة أعلـى؟ تزحلق اللوطة, انبهر واتعرف  على الأ رقام.">
                
                <BtnSwipUp href ="#hero_content" hrefText = "تـزحلق اللوطة"/>
            
            </ClashingColors>
            <section id= "hero_content">
                {polisArr.allApiJson.edges.map((edge) => {return <PoliticianCard politician={edge.node} />})}
            </section>

        </Layout>
    )
}