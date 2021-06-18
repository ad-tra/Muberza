import React, {useState} from 'react'
import dayjs from 'dayjs'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { numFormatter } from './Utils'; 
import SelectDropdownWrapper from './SelectDropdownWrapper'



const XAxisFormatter = timestamp=> new dayjs(timestamp * 1000).format("MMM,YYYY")
const YAxisFormatter = magnitude => numFormatter(magnitude) 

const formatTooltipLabel = label => new dayjs(label * 1000).format("MMMM YYYY")
const formatToolTipKey = key => numFormatter(key, 1)

 
export default function LineChartWrapper({title, dataSourceMacro,dataSource, XAxisDataKey, YAxisDataKey }) {
    const [lcData, setLcData] = useState([{
        "data":dataSourceMacro[dataSource], 
        "XAxisDataKey": XAxisDataKey,
        "YAxisDataKey": YAxisDataKey}])
        
    const sdCallback = data => setLcData([...lcData, {
        "data" : data,
        "XAxisDataKey": XAxisDataKey,
        "YAxisDataKey": YAxisDataKey
    }])


    return (
        <div className= "chart_wrapper">
            <ResponsiveContainer width={800} height={700}>
                
                <AreaChart 
                    width={500} 
                    height={400} 
                    
                    margin={{top: 10, right: 50, left: 50, bottom: 0,}}>

                    <XAxis 
                        dataKey={lcData[0].XAxisDataKey} 
                        domain={['dataMin', 'dataMax']} 
                        type="number" 
                        tickCount={3}
                        interval="preserveStartEnd"
                        tickFormatter={XAxisFormatter}
                    />

                    <YAxis 
                        dataKey={lcData[0].YAxisDataKey}
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
                    
                    {/*defs for gradient values*/}
                    <defs>
                        <linearGradient id={`degrade`}  x1="0" y1="0" x2="0" y2="1">
                            <stop offset="20%"  stopOpacity={1}/>
                            <stop offset="100%"  stopOpacity={1}/>
                        </linearGradient>
                    </defs>

                    {
                        lcData.map(lcDataCurr =>(
                            <Area 
                            id= "stroke_main"
                            type="linear" 
                            data={lcDataCurr.data} 
                            dataKey={YAxisDataKey}  
                            fillOpacity={1} 
                            fill={`url(#degrade)`}  
                        />
                        ))
                    }

                </AreaChart>
                
            </ResponsiveContainer>
            <SelectDropdownWrapper callback = {sdCallback} dataSource= {dataSource}/>   
            <h2 className="chart_title">{title}</h2>
        
        </div>
    )
}
