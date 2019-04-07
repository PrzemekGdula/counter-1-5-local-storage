import React from 'react'


const LOCAL_STORAGE_KEY = 'state';
class Counter extends React.Component {

    state = {
        number: 0,
    };

    componentDidUpdate() {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state));
    }

    componentDidMount() {
        const state = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        this.setState({ ...JSON.parse(state) });
    }

    inc = () => this.setState({ number: this.state.number + 1 })
    dec = () => this.setState({ number: this.state.number - 1 })
    incFive = () => this.setState({ number: this.state.number + 5 })
    decFive = () => this.setState({ number: this.state.number - 5 })
    reset = () => this.setState({ number: 0 })

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.inc}
                >
                    +1
                </button>
                <button
                    onClick={this.inc}
                >
                    -1
                </button>
                <button
                    onClick={this.incFive}
                >
                    +5
                </button>
                <button
                    onClick={this.decFive}
                >
                    -5
                </button>
                <button
                    onClick={this.reset}
                >
                    reset
                </button>
            </div>
        )
    }
}

Counter.defaultProps = {
    number: 0,
}

export default Counter