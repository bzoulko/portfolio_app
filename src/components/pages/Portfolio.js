import React from 'react';
import PortfolioDetail from '../PortfolioDetail';

// const getPortfolioDetail = () => {
//   let data = ""
//   console.log("starting extraction...");
//   projectDetail.map((pd) => {
//     return(`<h2>${pd.Title}<h2>
//             <image src='${pd.Image.map((img) => {return("<image src='" + img + "'>")})}'>"
//             <a href='${pd.DeployedLink}'></a>
//             <a href='${pd.GitHub}'></a>`
//     );
//   })
//   projectDetail.forEach(portfolio => {
//     data += `<h2>${portfolio.Title}<h2>
//            <image src='${portfolio.Image.map((img) => {return("<image src='" + img + "'>")})}'>"
//            <a href='${portfolio.DeployedLink}'></a>
//            <a href='${portfolio.GitHub}'></a>`
//   });
//   console.log("finished extraction: " + data);
//   return(data)
// }

export default function Portfolio() {  
  return (
    <div className='pt-2 mt-2'>
      <h1>Portfolio Page</h1><hr></hr>
      <PortfolioDetail />
    </div>
  );
}
