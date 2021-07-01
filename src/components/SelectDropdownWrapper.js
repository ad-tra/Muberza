import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Select  from 'react-select'



export default function SelectDropdownWrapper({callback, dataSource, maxOptions, originPoliticianName}) {
    const optionsData = useStaticQuery(
        graphql`
        query SelectDropdownWrapper {
            allPoliticiansJson(sort: {fields: viewershipStats___brief___aggregateViews, order: DESC}) {
              edges {
                node {
                  name
                  parent {
                    ... on File {
                      relativePath
                    }
                  }
                }
              }
            }
          }`
    )
    const normalizeGraphql = sourceJson => {
        let result = []
        optionsData[sourceJson].edges.forEach((node)=>{
          if(node.node.name !== originPoliticianName) 
            result.push({value: `/api/${node.node.parent.relativePath}`, label: node.node.name})
        })
        return result;
    }
    const options = normalizeGraphql("allPoliticiansJson")
    
    
    
    async function handleChange  (selectedOptions){
      if(selectedOptions.length> maxOptions) selectedOptions.splice((maxOptions-1), 1)
      let result = []
      for(let i = 0; i<selectedOptions.length; i++){ 
        const response = await fetch(selectedOptions[i].value)
        const json = await response.json()
        result.push(json.viewershipStats[dataSource])
      }
      callback(result)
      
    }


    const customStyles = {
      control: () =>(null),
      menu: ()=>(null)
    }

    return (
        <Select 
            handleChange = {handleChange}
            className= "select_dropdown_wrapper" 
            onChange = {handleChange}
            isRtl
            isMulti
            
            styles = {customStyles}
            placeholder="قـــــارن"
            isSearchable = {false}
            options={options}
        />
    )
}
