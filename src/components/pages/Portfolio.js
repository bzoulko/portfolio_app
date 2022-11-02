import React from 'react';

const projectDetail = [
  {
    Title: "Password Generator",
    Image: ["src\images\PasswordGenerator.png"],
    DeployedLink: "https://bzoulko.github.io/module3_challenge/",
    GitHub: "https://github.com/bzoulko/module3_challenge.git"
  },
  {
    Title: "Weather Dashboard",
    Image: ["src\images\WeatherDashboard.png"],
    DeployedLink: "https://bzoulko.github.io/module6_challenge/",
    GitHub: "https://github.com/bzoulko/module6_challenge.git"
  },
  {
    Title: "Investment Watchlist",
    Image: ["src\images\InvestmentWatchlist-p1.png", 
            "src\images\InvestmentWatchlist-p2.png", 
            "src\images\InvestmentWatchlist-p3.png"],
    DeployedLink: "https://jsp220.github.io/Investment-Watchlist/",
    GitHub: "https://github.com/jsp220/Investment-Watchlist.git"
  },
  {
    Title: "Corgi Messenger",
    Image: ["src\images\CorgisMessenger-p1.png", 
            "src\images\CorgisMessenger-p2.png", 
            "src\images\CorgisMessenger-p3.png", 
            "src\images\CorgisMessenger-p4.png", 
            "src\images\CorgisMessenger-p5.png"],
    DeployedLink: "https://corgi-messenger.herokuapp.com/",
    GitHub: "https://github.com/ricky8221/chat-project.git"
  },
  {
    Title: "Note Taker",
    Image: ["src\images\NoteTaker-p1.png", 
            "src\images\NoteTaker-p2.png", 
            "src\images\NoteTaker-p3.png", 
            "src\images\NoteTaker-p4.png"],
    DeployedLink: "https://vast-shore-80072.herokuapp.com/",
    GitHub: "https://github.com/bzoulko/module11_challenge.git"
  },
  {
    Title: "Progressive Web Application: Text Editor",
    Image: ["src\images\PWA-TextEditor.png"],
    DeployedLink: "https://aqueous-beach-61462.herokuapp.com/",
    GitHub: "https://github.com/bzoulko/module19_challenge.git"
  },
]

const getPortfolioDetail = function() {
  const data = ""
  projectDetail.forEach(portfolio => {
    data += `<h2>${portfolio.Title}<h2>
           <image src='${portfolio.Image.map((img) => {return("<image src='" + img + "'>")})}'>"
           <a href='${portfolio.DeployedLink}'></a>
           <a href='${portfolio.GitHub}'></a>`
  });
  return(data)
}

export default function Portfolio() {
  
  return (
    <div className='pt-2 mt-2'>
      <h1>Portfolio Page</h1><hr></hr>
      <div>
        <getPortfolioDetail />
      </div>
    </div>
  );
}
