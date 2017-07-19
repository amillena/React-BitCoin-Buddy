import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

//import PanelHeading from './Panelheading';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData1:props.chartData1,
      chartData2:props.chartData2,
      

    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    
  }




  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}

          options={{

            title:{
              display:this.props.displayTitle,
              text:'BitCoin Historic Price',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
    
       <Bar
          data={this.state.chartData1}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'My BitCoin',
              fontSize:25

            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        
      </div>
    )
  }
}

export default Chart;
