import React, {Component} from "react";
import '../css/estiloSubtitulo.css'

class Subtitulo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.defaultValue};
    }

    backgroundStyle = {
        backgroundImage: 'transparent',
        backgroundSize: 'cover',
        padding: '2%'
    }

    leftStyle ={
        width: '30%',
        float: 'left',
        // padding: '30px',
        padding: '5%'
    }

    rightStyle={
        width: '69%',
        float: 'right',
        padding: '5%'
    }
    isLeft(){
        if (this.props.lado === "left"){
            return (
                <div style={this.backgroundStyle} id={"wrapper"}>
                    <div style={this.leftStyle} className={"titulo"}>
                        <label>{this.props.titulo}</label>
                    </div>
                    <div style={this.rightStyle} className={"jumbotron"}>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div style={this.backgroundStyle} id={"wrapper"}>
                    <div style={this.rightStyle} className={"jumbotron"}>
                        <p>{this.props.desc}</p>
                    </div>
                    <div style={this.leftStyle} className={"titulo"}>
                        <label>{this.props.titulo}</label>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (<div>
                {this.isLeft()}
        </div>
        )
    }
}

export default Subtitulo;
