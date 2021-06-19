import React, {useEffect} from 'react'
import PoliticianCard from '../components/PoliticianCard.js'
import { graphql, useStaticQuery } from 'gatsby'
import { nanoid } from 'nanoid'

import ClashingColors from '../components/ClashingColors.js'
import BtnSwipUp from '../components/BtnSwipUp.js'
import Layout from '../components/Layout.js'


export default function Index () {
    const polisArr = useStaticQuery(
        graphql`
        query MyPolis {
          allPoliticiansJson(sort: {fields: viewershipStats___brief___aggregateViews, order: DESC}) {
              edges {
                node {
                  briefDiscrp
                  name
                  party
                  slug
                  thumbImage {
                    childrenImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                  viewershipStats {
                    full{
                      views
                    }
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
    
    useEffect(() => {
      document.querySelector(".clashing_colors_cta a").addEventListener("click",(event)=>{
        event.preventDefault()
        document.querySelector('#hero_content').scrollIntoView({behavior:"smooth"})
      })
    })


    
    return (
        <Layout className="layout--clashing_colors"> 
            <ClashingColors
              headerText="مــــــبـــا ر ز ة"
              subheaderText="بوق في البرلمـــان و مبارزة في المطار. عبير كونتر سـيــف هو طـــرح يـتفرجو فيها مـلاين توانسا على Facebook Lives. زعما شكون ر ابـح الطرح؟ شكون عندو نسب مشــاهدة أعلـى؟ تزحلق اللوطة, انبهر واتعرف  على الأ رقام.">
                
              <BtnSwipUp href ="#hero_content" hrefText = "تـزحلق اللوطة"/>
            </ClashingColors>
            <section id= "hero_content">
                {polisArr.allPoliticiansJson.edges.map(edge => {return <PoliticianCard politician={edge.node} key = {nanoid()}/>})}
            </section>

        </Layout>
    )
}