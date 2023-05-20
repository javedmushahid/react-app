import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    

    render() {
        return (
            <div className="flex flex-row items-center justify-center gap-x-12 w-full h-full p-12">
                
                <div className="flex flex-col gap-y-4 bg-blue-400 rounded-md p-4  h-fit w-1/2 items-center">
                    <h1 className="font-bold text-3xl">Class Component For Input Text Box</h1>
                    <label className="text-2xl">Input:</label>
                    <input className="text-2xl"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <h1 className="font-bold text-2xl">Your Text: {this.state.inputValue}</h1>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    };
  };

export default connect(mapStateToProps)(ClassComponent);
