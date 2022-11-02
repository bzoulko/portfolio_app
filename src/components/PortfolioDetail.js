import React from 'react';
import passGen from "../images/PasswordGenerator.png";
import weatherDash from "../images/WeatherDashboard.png";
import investWatch1 from "../images/InvestmentWatchlist-p1.png";
import investWatch2 from "../images/InvestmentWatchlist-p2.png";
import investWatch3 from "../images/InvestmentWatchlist-p3.png";
import corgisMess1 from "../images/CorgisMessenger-p1.png";
import corgisMess2 from "../images/CorgisMessenger-p2.png";
import corgisMess3 from "../images/CorgisMessenger-p3.png";
import corgisMess4 from "../images/CorgisMessenger-p4.png";
import corgisMess5 from "../images/CorgisMessenger-p5.png";
import noteTaker1 from "../images/NoteTaker-p1.png";
import noteTaker2 from "../images/NoteTaker-p2.png";
import noteTaker3 from "../images/NoteTaker-p3.png";
import noteTaker4 from "../images/NoteTaker-p4.png";
import pwaEditor from "../images/PWA-TextEditor.png";

export default function PortfolioDetail() {
    const hrefStyle = {
        display: "flex",
        color: "violet",
        fontFamily: 'helvetica',
        alignText: "text-justify",
        width: "100%"
    };

    return (
        <div>
            <h5>"Password Generator"</h5>
            <div>
                <img src={passGen} alt="Password Generator" style={{ width: "80%" }}></img>
                <ul>
                    <li>
                        <a style={hrefStyle} href="https://bzoulko.github.io/module3_challenge/" target="_blank" rel="noreferrer">Deployed URL</a>
                    </li>
                    <li>
                        <a style={hrefStyle} href="https://github.com/bzoulko/module3_challenge.git" target="_blank" rel="noreferrer">GitHub URL</a>
                    </li>
                </ul>
            </div><hr></hr>

            <h5>"Weather Dashboard"</h5>
            <div>
                <img src={weatherDash} alt="Weather Dashboard" style={{ width: "80%" }}></img>
                <ul>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://bzoulko.github.io/module6_challenge/" target="_blank">Deployed URL</a>
                    </li>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://github.com/bzoulko/module6_challenge.git" target="_blank">GitHub URL</a>
                    </li>
                </ul>
            </div><hr></hr>

            <h5>"Investment Watchlist"</h5>
            <div>
                <img src={investWatch1} alt="Investment Watchlist pg-1" style={{ width: "80%" }}></img>
                <img src={investWatch2} alt="Investment Watchlist pg-2" style={{ width: "80%" }}></img>
                <img src={investWatch3} alt="Investment Watchlist pg-3" style={{ width: "80%" }}></img>
                <ul>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://jsp220.github.io/Investment-Watchlist/" target="_blank">Deployed URL</a>
                    </li>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://github.com/jsp220/Investment-Watchlist.git" target="_blank">GitHub URL</a>
                    </li>
                </ul>
            </div><hr></hr>

            <h5>"Corgi Messenger"</h5>
            <div>
                <img src={corgisMess1} alt="Corgis Messenger pg-1" style={{ width: "80%" }}></img>
                <img src={corgisMess2} alt="Corgis Messenger pg-2" style={{ width: "80%" }}></img>
                <img src={corgisMess3} alt="Corgis Messenger pg-3" style={{ width: "80%" }}></img>
                <img src={corgisMess4} alt="Corgis Messenger pg-4" style={{ width: "80%" }}></img>
                <img src={corgisMess5} alt="Corgis Messenger pg-5" style={{ width: "80%" }}></img>
                <ul>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://corgi-messenger.herokuapp.com/" target="_blank">Deployed URL</a>
                    </li>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://github.com/ricky8221/chat-project.git" target="_blank">GitHub URL</a>
                    </li>
                </ul>
            </div><hr></hr>

            <h5>"Note Taker"</h5>
            <div>
                <img src={noteTaker1} alt="Note Taker pg-1" style={{ width: "80%" }}></img>
                <img src={noteTaker2} alt="Note Taker pg-2" style={{ width: "80%" }}></img>
                <img src={noteTaker3} alt="Note Taker pg-3" style={{ width: "80%" }}></img>
                <img src={noteTaker4} alt="Note Taker pg-4" style={{ width: "80%" }}></img>
                <ul>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://vast-shore-80072.herokuapp.com/" target="_blank">Deployed URL</a>
                    </li>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://github.com/bzoulko/module11_challenge.git" target="_blank">GitHub URL</a>
                    </li>
                </ul>
            </div><hr></hr>

            <h5>"Progressive Web Application - Text Editor"</h5>
            <div>
                <img src={pwaEditor} alt="PWA - Text Editor" style={{ width: "80%" }}></img>
                <ul>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://aqueous-beach-61462.herokuapp.com/" target="_blank">Deployed URL</a>
                    </li>
                    <li>
                        <a style={hrefStyle} rel="noreferrer" href="https://github.com/bzoulko/module19_challenge.git" target="_blank">GitHub URL</a>
                    </li>
                </ul>
            </div><hr></hr>

        </div>
    );
}