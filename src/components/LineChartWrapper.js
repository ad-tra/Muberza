import React, {useState} from 'react'
import dayjs from 'dayjs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {nanoid} from 'nanoid'

import { numFormatter } from './Utils'; 
import SelectDropdownWrapper from './SelectDropdownWrapper'



const XAxisFormatter = timestamp=> new dayjs(timestamp * 1000).format("MMM,YYYY")
const YAxisFormatter = magnitude => numFormatter(magnitude) 

const formatTooltipLabel = label => new dayjs(label * 1000).format("MMMM YYYY")
const formatToolTipKey = key => numFormatter(key, 1)

 
export default function LineChartWrapper({title, dataSourceMacro,dataSource, XAxisDataKey, YAxisDataKey }) {

    const [lcData, setLcData] = useState([dataSourceMacro.viewershipStats[dataSource]])
        
    const sdCallback = dataArr => setLcData([lcData[0], ...dataArr])

    return (
        <div className= "line_chart_wrapper">
            <ResponsiveContainer width="100%" height={700}>
                
                <LineChart 
                    width={500} 
                    height={400} 
                    
                    margin={{top: 10, right: 50, left: 50, bottom: 0,}}>

                    <XAxis 
                        dataKey={XAxisDataKey} 
                        domain={['dataMin', 'dataMax']} 
                        type="number" 
                        tickCount={3}
                        interval="preserveStartEnd"
                        tickFormatter={XAxisFormatter}
                    />

                    <YAxis 
                        dataKey={YAxisDataKey}
                        tickFormatter= {YAxisFormatter}
                    />
                    
                    <CartesianGrid 
                        id="grid" 
                        strokeDasharray="3 3 " 
                        horizontal={true} 
                        vertical={true} 
                    />
                    
                    <Tooltip  
                        position={{y:200}}
                        labelFormatter={formatTooltipLabel} 
                        formatter={formatToolTipKey}
                    />
                    
                    {
                        lcData.map((lcDataCurr, i)=>(
                            <defs>
                                <linearGradient id={`degrade${i}`}  x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="20%"  stopOpacity={1}/>
                                    <stop offset="100%"  stopOpacity={1}/>
                                </linearGradient>
                            </defs>
                        ))
                    }
                    {    
                        lcData.map((lcDataCurr, i) =>(
                                 
                            <Line 
                                id= {`stroke${i}`}
                                type="linear" 
                                strokeWidth = {2}
                                data={lcDataCurr} 
                                dataKey={YAxisDataKey}  
                                fillOpacity={1} 
                                fill={`url(#degrade${i})`}  
                            />
                            
                        ))
                    }

                </LineChart>
                
            </ResponsiveContainer> 
            <h2 className="chart_title">{title}</h2>
            
            <SelectDropdownWrapper 
                callback = {sdCallback} 
                dataSource= {dataSource} 
                maxOptions = {2}
                originPoliticianName = {dataSourceMacro.name}
            />  
        </div>
    )
}
