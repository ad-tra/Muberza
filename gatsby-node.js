//const scraperVS = require("./scrapers/mainVS");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
        {
            allApiJson {
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
    const politicians = results.data.allApiJson.edges
    
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