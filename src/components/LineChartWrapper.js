import React from 'react'
import dayjs from 'dayjs'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { numFormatter } from './Utils'; 

export default function LineChartWrapper({title, dataSourceMacro, XAxisDataKey, YAxisDataKey }) {
    const formatXAxis = timestamp=> new dayjs(timestamp * 1000).format("MMM,YYYY")
    
    const formatTooltipLabel = label => new dayjs(label * 1000).format("MMMM YYYY")
    
    const formatToolTipKey = key => numFormatter(key) 

    
    return (
        <div className= "chart_wrapper">
            <ResponsiveContainer width={800} height={700}>
                <AreaChart 
                    width={500} 
                    height={400} 
                    data={dataSourceMacro} 
                    margin={{top: 10, right: 50, left: 50, bottom: 0,}}>

                    <XAxis 
                        dataKey={XAxisDataKey} 
                        domain={['dataMin', 'dataMax']} 
                        type="number" 
                        tickCount={3}
                        interval="preserveStartEnd"
                        tickFormatter={formatXAxis}
                    />

                    <YAxis dataKey={YAxisDataKey} />
                    
                    <CartesianGrid 
                        id="grid" 
                        strokeDasharray="3 3 " 
                        horizontal={true} 
                        vertical={true} 
                    />
                    
                    <Tooltip  
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

                    <Area 
                        id= "stroke_main"
                        type="linear" 
                        dataKey={YAxisDataKey}  
                        fillOpacity={1} 
                        fill={`url(#degrade)`}  
                    />
                </AreaChart>
                
            </ResponsiveContainer>
            <h2 className="chart_title">{title}</h2>
        </div>
    )
}
