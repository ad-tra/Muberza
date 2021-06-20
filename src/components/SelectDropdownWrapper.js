import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Select  from 'react-select'



export default function SelectDropdownWrapper({callback, dataSource, maxOptions}) {
    const optionsData = useStaticQuery(
        graphql`
        query SelectDropdownWrapper {
            allPoliticiansJson {
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
        optionsData[sourceJson].edges.forEach((node)=>{result.push({value: `/api/${node.node.parent.relativePath}`, label: node.node.name})})
        return result;
    }
    let options = normalizeGraphql("allPoliticiansJson")
    
    
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

    return (
        <Select 
            handleChange = {handleChange}
            className= "select_dropdown_wrapper" 
            onChange = {handleChange}
            isRtl
            isMulti
            placeholder="قـــــارن"
            isSearchable = {false}
            options={options}
        />
    )
}
