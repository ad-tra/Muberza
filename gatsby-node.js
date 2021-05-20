exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
        {
            allApiJson {
                edges {
                  node {
                    slug
                    id
                  }
                }
            }
        }
    `)
    
    results.data.allPoliticiansJson.edges.forEach((edge)=>{
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