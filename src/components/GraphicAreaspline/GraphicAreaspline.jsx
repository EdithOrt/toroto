import React, {useEffect, useState} from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import config from "../../utils/chart-bar-areaspline"


const GraphicAreaspline = () => {

    let urlJSON = "https://raw.githubusercontent.com/EdithOrt/dbs/master/db.json"

    let [data, setData] = useState()

    const getData = async (url) =>{
        try {
            const response = await fetch(url)
            const data = await response.json()
            await data.footPrint.map((item) =>{
                setData(item)
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(urlJSON)
    }, [])

    return (
    <div>
        {data && (
        <HighchartsReact highcharts={Highcharts} options={config} />
        )}
    </div>
    )
}

export default GraphicAreaspline