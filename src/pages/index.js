import React from 'react'
import NavBar from '../components/Navbar.js'
import PoliticianCard from '../components/PoliticianCard.js'
import style from '../styles/global.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'

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
        <div>
            <div className="clashing_colors">
                <NavBar />

                <div className="clashing_colors_header">
                    <h1 dir="rtl" lang="ar">
                        مــــــبـــا ر ز ة{' '}
                    </h1>
                    <p dir="rtl" lang="ar">
                        عبير كونتر سـيــف. إتلاف كونتر كرامة هي مبارزة يـتفرجو
                        فيها مـلاين توانسا على Facebook Lives. زعما شكون ر ابـح
                        الطرح؟ شكون عندو نسب مشاهدة أعلـى؟ تزحلق اللوطة و اتعرف
                        على الأرقام.
                    </p>
                </div>

                <div className="clashing_colors_cta">
                    <Link to="#">تـزحلق اللوطة</Link>
                    <div className="degrade" aria-hidden="true" ></div>
                    <div className="degrade" aria-hidden="true" ></div>
                    <div className="degrade" aria-hidden="true" ></div>
                </div>
            </div>

            {polisArr.allPoliticiansJson.edges.map((edge) => {
                return <PoliticianCard polisNode={edge.node} />
            })}
        </div>
    )
}
