import './styles/PersonalityQuiz.css';
import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';



class PersonalityQuiz extends Component {

state = {
    totalscore: 0,
    index: 0,
    trivia: [
        {question: "testing Q1?", 
        answer: [{text: "Answer A1", score: 2},{text: "Answer A1", score: 5},{text: "Answer A1", score: 7},{text: "Answer A1", score: 10}], },
        {question: "testing Q2?", 
        answer: [{text: "Answer A2", score: 2},{text: "Answer A2", score: 5},{text: "Answer A2", score: 7},{text: "Answer A2", score: 10}]},{question: "testing Q3?", 
        answer: [{text: "Answer A3", score: 2},{text: "Answer A3", score: 5},{text: "Answer A3", score: 7},{text: "Answer A3", score: 10}]}
]
}

Answer = (userscore) => {
    const score = this.state.totalscore;
    const updatedScore = score + userscore;

    const i = this.state.index;
    const updatedindex = i + 1
    this.setState({index : updatedindex, totalscore: updatedScore});
}

render() {



    return(
        <Container className="QuizBox">
            <Jumbotron>
                <img alt="quiz images"/>
                <p>{this.state.totalscore}</p>
                <h2>{this.state.trivia[this.state.index].question}</h2>
            </Jumbotron>
            <Container className="AnswersBox">
                <h3 onClick={() => this.Answer(this.state.trivia[this.state.index].answer[0].score)} >{this.state.trivia[this.state.index].answer[0].text}</h3>
                <h3 onClick={() => this.Answer(this.state.trivia[this.state.index].answer[1].score)} >{this.state.trivia[this.state.index].answer[1].text}</h3>
                <h3 onClick={() => this.Answer(this.state.trivia[this.state.index].answer[2].score)} >{this.state.trivia[this.state.index].answer[2].text}</h3>
                <h3 onClick={() => this.Answer(this.state.trivia[this.state.index].answer[3].score)} >{this.state.trivia[this.state.index].answer[3].text}</h3>
            </Container>
        </Container>
        )
    }
}

export default PersonalityQuiz