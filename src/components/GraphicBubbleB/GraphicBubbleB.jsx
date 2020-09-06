import React, {useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import optionsBubbleB from "../../utils/optionsBubbleB";
import more from "highcharts/highcharts-more";
more(Highcharts);



const GraphicBubbleB = () => {

  /* const getData = () =>{
    const database = fetch('https://raw.githubusercontent.com/EdithOrt/test-project/master/db.json')
    const data = database.then (res=>res.json( ))
    data.then(res => {
      let newData = [];
      for (let i =0 ; i<data.length; i++){
        newData.push({
          name: res.area,
         data:if(name === res.area){
           return
[{name: res.name,
value:res.footPrint.foot}]
         }
        })
      }
    }
    
    )
  }
  getData() */

   const getData = async() =>{
    const database = await fetch('https://raw.githubusercontent.com/EdithOrt/test-project/master/db.json')
    const result = await database.json()
    console.log(result)
  }
  getData()
  

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsBubbleB} />
    </div>
  );
};

export default GraphicBubbleB;
