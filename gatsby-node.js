exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
        {
            allPoliticiansJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    
    results.data.allPoliticiansJson.edges.forEach((edge)=>{
        const politician = edge.node;
        console.log(politician.slug);
        
        createPage({
            path: `/politicians/${politician.slug}/`,
            component: require.resolve('./src/templates/PoliticianPage.js'),
            context : {
                slug: politician.slug
            }
        })
    })
    

}