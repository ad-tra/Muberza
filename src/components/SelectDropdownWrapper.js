import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Select from 'react-select'


export default function SelectDropdownWrapper({callback, dataSource}) {
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
    let options = normalizeGraphql("allPoliticiansJson", )
    
    
    
    
    const handleChange = (selectedValue)=> {
        console.log(selectedValue)
        fetch(selectedValue.value)
        .then(response => response.json())
        .then(json => {callback(json.viewershipStats[dataSource])})
        
        .catch((err)=>{console.trace(err)})
    }

    return (
        <Select 
            onChange= {handleChange}
            className= "select_dropdown_wrapper" 
            options={options} 
            isRtl
            isMulti
            placeholder="قـــــارن"
            isSearchable = {false}/>
    )
}
