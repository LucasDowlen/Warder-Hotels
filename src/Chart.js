 import React from "react";
 import {Doughnut} from 'react-chartjs-2';


 const Chart = React.memo(() => {

  const chartData = {
    labels: ['Landmass Covered By Warder', 'Other'],
    datasets: [{
      data: [34, 64],
      backgroundColor: ['#204c57', '#34373A'],
      borderColor: ['rgb(14, 20, 22)'],
    }],
  }
  const options = {
    plugins: {
      legend: {
        onClick: null,
        labels: {
          color: "white",
          font: {
            size: 18
          }
        }
      }
    }
  }


   return (
      <div>
        <Doughnut 
        data={chartData}  
        options={options}
        />
    </div> 
   )

 })

 export default Chart
 
//  function Chart() {

//   const chartData = {
//     labels: ['Landmass Covered By Warder', 'Other'],
//     datasets: [{
//       data: [34, 64],
//       backgroundColor: ['#204c57', '#34373A'],
//       borderColor: ['rgb(14, 20, 22)'],
//     }],
//   }
//   const options = {
//     plugins: {
//       legend: {
//         onClick: null,
//         labels: {
//           color: "white",
//           font: {
//             size: 18
//           }
//         }
//       }
//     }
//   }


//    return (
//       <div>
//         <Doughnut 
//         data={chartData}  
//         options={options}
//         />
//     </div> 
//    )
//  }
 
// export default Chart
 

// export class Chart extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//         chartData: {
//           labels: ['Landmass Covered By Warder', 'Other'],
//           datasets: [{
//             data: [34, 64],
//             backgroundColor: ['#204c57', '#34373A'],
//             borderColor: ['rgb(14, 20, 22)'],
//           }],
//         },
//         options: {
//           plugins: {
//             legend: {
//               onClick: null,
//               labels: {
//                 color: "white",
//                 font: {
//                   size: 18
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//   render() {
//     return (
      // <div>
      //   <Doughnut 
      //   data={this.state.chartData}  
      //   options={this.state.options}
      //   />
      // </div>
//     )
//   }
// }

// export default Chart