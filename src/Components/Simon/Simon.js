import React, { Component } from 'react'
import './style.css'
import './script'

class Simon extends Component {

    componentDidMount() {
        script.js
    }
    render() {
        return (
            <div className="simon" >
                <header>
                    <h1>Simon!</h1>
                    <h2>Memory Game</h2>
                </header>
                <div>
                    <div id="game-area">
                        <div id="game-container">
                            <div id="red" class="red game-buttons" data-number="0">RED</div>
                            <div id="gold" class="yellow game-buttons" data-number="1">YELLOW</div>
                            <div id="blue" class="blue game-buttons" data-number="2">BLUE</div>
                            <div id="orange" class="orange game-buttons" data-number="3">ORANGE</div>
                            <div id="green" class="green game-buttons" data-number="4">GREEN</div>
                            <div id="purple" class="purple game-buttons" data-number="5">PURPLE</div>
                        </div>
                        <br />
                        <div id="display-area">
                            <div id="status-display">
                                <button id="start-button">Start</button>
                                <p id="current-status">&larr; Click Start!</p>
                            </div>
                            <div id="score-area">
                                <p>Score <span id="score-display"></span></p>
                                <p>HighScore <span id="highscore-display"></span></p>
                            </div>
                            <p id="all-time-high">All Time HighScore <span id="all-time"></span></p>
                        </div>
                    </div>
                    <div id="modal">
                        <div id="text-container">
                            <p id="modal-textbox">
                                To start playing just click 'Close' below then click the 'Start' button on the main screen.<br />
                                The Original Simon game was an electronic device created in 1978 by Ralph Baer. Game play consists of watching a sequence of flashing lighted buttons and then repeating back the sequence by pressing the buttons in the same order. The sequence starts as one button and then increases by one every time you correctly repeat the sequence. The object of the game is to remember and correctly repeat the longest sequence you can.<br />
                                My adaptation increases the number of colored buttons to six and runs in your browser.
                            Read more about the original Simon game <a href="https://americanhistory.si.edu/collections/search/object/nmah_1302005">here.</a> Thanks for playing!<br />
                                <span id="textbox-foot"><button id="close">Close</button>
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}