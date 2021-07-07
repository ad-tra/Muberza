//const scraperVS = require("./scrapers/viewership_stats/main");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
        {
          allPoliticiansJson(sort: {fields: viewershipStats___brief___aggregateViews, order: ASC}) {
                edges {
                  node {
                    slug
                    facebookSlug
                    id
                    parent {
                      ... on File {
                        absolutePath
                      }
                    }
                  }
                }
              }
        }
    `)
    const politicians = results.data.allPoliticiansJson.edges
    //await scraperVS.main(politicians);



    politicians.forEach((edge)=>{
        const politician = edge.node;

        createPage({
            path: `/politicians/${politician.slug}/`,
            component: require.resolve('./src/templates/PoliticianPage.js'),
            context : {
                id: politician.id
            }
        })
    })
    

}
/**
 

 */