import React from 'react'
import styled from 'styled-components'
import Question from './Question'

const MainWrapper = styled.div`
display:flex;
height: 90vh;
flex-direction: column;
justify-content: center;
align-items: center;
background: black;
color:greenyellow;
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Input = styled.input.attrs({type: 'text'})`
width:300px;
padding: 10px;
margin: 10px;
border: 2px greenyellow solid;
background: transparent;
color: greenyellow;
`

const Button = styled.button`
background: greenyellow;
color: black;
padding: 12px;
margin: 10px;
border: none;
width: ${props => props.width};
font-weight: bold;
`

const QuizWrapper = styled.div`
display:flex;
height: 90vh;
flex-direction: column;
justify-content: center;
align-items: center;
background: black;
color:greenyellow;
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const P = styled.p`
display:flex;
justify-content:center;
align-items: center;
margin: 20px;
`

class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            questions:[

                {question:'Java is a _ _ _ programming language.', option1:'Object Oriented', option2:'Object Based', answer:'Object Oriented'},
                {question:'_ _ _ used to find and fix bugs in programs.', option1:'JDB', option2:'JVM', answer:'JDB'},
                {question:'Which of the following option leads to the portability and security of Java?', option1:'Dynamic binding between objects', option2:'Bytecode is executed by JVM', answer:'Bytecode is executed by JVM'},
                {question:'Which of the following is not a Java features?', option1:'Use of pointers', option2:'Architecture Neutral', answer:'Use of pointers'},
                {question:'The \u0021 article referred to as a', option1:'Octal escape', option2:'Unicode escape sequence', answer:'Unicode escape sequence'},
                {question:'What is the return type of the hashCode() method in the Object class?', option1:'Object', option2:'int', answer:'int'},
                {question:'Which of the following is a valid long literal?', option1:'0xnf029L', option2:'ABH8097', answer:'0xnf029L'},
                {question:'What does the expression float a = 35 / 0 return?', option1:'Infinity', option2:'0', answer:'Infinity'},
                {question:' Which of the following creates a List of 3 visible items and multiple selections abled?', option1:'new List(true, 3)', option2:'new List(3, true)', answer:'new List(3, true)'},
            
            ],
            name: "",
            email: "",
            login: false,
            count: 0,
            correct: 0
        }
    }

    loginNow = async(e) =>{

        e.preventDefault();

        const uName = e.target.elements.name.value;
        const email = e.target.elements.email.value;

        if(uName && email){

            this.setState({
                login: true,
                name: uName,
                email: email
            })

        }else{
            window.alert("Enter name and email to start quiz!");
        }

    }

    prevQuestion(){
        
        if(this.state.count > 0){
            this.setState({
                count: this.state.count-1
            })
        }

    }

    calculateAnswer = async(e) => {
        
        e.preventDefault();

        const answer = e.target.elements.answer.value;

        if(answer === this.state.questions[this.state.count].answer){
            window.alert("Congrats, You are correct!");
            this.setState({
                correct: this.state.correct+1,
            })
        }else{
            window.alert("Sorry, Correct answer is "+this.state.questions[this.state.count].answer);
        }

    }

    nextQuestion(){
        
        if(this.state.count < (this.state.questions.length-1)){
            this.setState({
                count: this.state.count+1
            })
        }else{
            window.alert("Quiz completed! You score is "+this.state.correct+"/"+this.state.questions.length);
        }
        
    }

    render(){

        return(

            (this.state.login ? 
                <QuizWrapper>
                    <div>Successfully Logged In As</div>
                    <h4>Name: {this.state.name}</h4>
                    <h4>Email: {this.state.email}</h4>

                    <Question response={this.calculateAnswer} count={this.state.count+1} question={this.state.questions[this.state.count].question} option1={this.state.questions[this.state.count].option1} option2={this.state.questions[this.state.count].option2} answer={this.state.questions[this.state.count].answer}/> 
                    <ButtonWrapper>
                        <Button width="100px" onClick={()=>{this.prevQuestion()}}>Previous</Button>
                        <Button width="100px" onClick={()=>{this.nextQuestion()}}>Next</Button>
                    </ButtonWrapper>
                </QuizWrapper>
                :
                <MainWrapper>
                    <h1>Welcome To Quiz App</h1>
                    <P>Fill your name and email to start quiz without any hassle. There are 9 questions of basics of java. You have to click submit button to check and save answer for final evaluation of marks. It is practice and fun type quiz as you will got your answer at the time of submition of answer.</P>
                    <Form onSubmit={this.loginNow}>
                        <Input placeholder="Enter Name" name="name" autoComplete="false"/>
                        <Input placeholder="Enter Email" name="email" autoComplete="false"/>
                        <Button width="325px">Start Quiz</Button>
                    </Form>
                </MainWrapper>
            )
            
        );

    }
    
}

export default Home;