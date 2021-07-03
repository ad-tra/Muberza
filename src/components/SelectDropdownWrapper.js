import { graphql, useStaticQuery } from 'gatsby'
import React, {components} from 'react'
import Select  from 'react-select'
import * as Theme from '../styles/colors.module.scss'
import tinycolor from 'tinycolor2'

export default function SelectDropdownWrapper({callback, dataSource, maxOptions, originPoliticianName, originPoliticianParty}) {
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
    
    /** 
     * Prepares the graphql data for react select usage.  
    */
    const normalizeGraphql = sourceJson => {
        let result = []
        optionsData[sourceJson].edges.forEach((node)=>{
          if(node.node.name !== originPoliticianName) 
            result.push({value: `/api/${node.node.parent.relativePath}`, label: node.node.name})
        })
        return result;
    }
    const options = normalizeGraphql("allPoliticiansJson")
    
    
    /**
     * handles user input by passing her/his option into parent component (LineChartWrapper)
     * passes an array with necessary stats. 
     */
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

    /**
     * add party colors by getting theme colors from sass file.
     */
    let primary, secondary, complementary, complementaryText, accentText;
    if(originPoliticianParty === "dostouri"){
      primary = Theme.redLight;
      secondary= Theme.redDark;
      complementary = Theme.greenLight 
      complementaryText = complementary
      accentText = tinycolor(Theme.accent).lighten(20).toString()
    }
    else{
      primary= Theme.greenDark 
      secondary= Theme.greenLight
      complementary = Theme.redLight 
      complementaryText = tinycolor(complementary).darken(30).toString()
      accentText = tinycolor(Theme.accent).darken(20).toString()
    }
      
    


    /**
     * Styling:
     * destroys react select with beautiful brutalism.
     */ 
    const customStyles = {
      control:(defaultStyles, {isFocused}) => ({
        ...defaultStyles,
        borderStyle: isFocused ? 'none' : 'none none solid none',
        width: '200px',
        borderColor: primary,
        backgroundColor: 'transparent',
        "&:hover":{
          borderColor: primary
        }
      }),
      placeholder:defaultStyles =>({
        ...defaultStyles,
        fontStyle: 'italic'
      }),
      indicatorSeparator:()=>(null),
      dropdownIndicator: defaultStyles =>({
        ...defaultStyles,
        color: `${primary} !important` 

      }),
      clearIndicator: ()=>({display: 'none'}),
      multiValue: defaultStyles=>({
        ...defaultStyles,
        backgroundColor: 'transparent',
        
        '&:nth-of-type(1)':{
          border:`2px dashed ${complementary}` ,
          '>div':{
            color:complementaryText
          }
        },
        '&:nth-of-type(2)':{
          border: `2px dashed ${Theme.accent}`,
          '>div':{
            color:accentText
          }
        }
      }),
      
      option: (defaultStyles, {isFocused, }) => ({ 
        ...defaultStyles,
        padding: '14px 11px',
        color: primary,
        backgroundColor: isFocused ? "#00000030" : "transparent",
        "&:active":{
          backgroundColor: '#00000040'
        }
      }),  
      menu: (defaultStyles)=>({
        ...defaultStyles,
        backgroundColor: secondary,
        boxShadow: `0 0 0 1px ${primary}`,
        top: '80%'
      }),
    }
    
    const customTheme = theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: primary,
        neutral80: 'black',
        neutral20: primary,
        neutral50: primary,

      },
    })

    
    return (
        <Select 
            handleChange = {handleChange}
            className= "react_select" 
            onChange = {handleChange}
            isRtl
            isMulti

            styles = {customStyles}
            theme= {customTheme}
            placeholder="قـــــارن"
            isSearchable = {false}
            options={options}
        />
    )
}
