import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";

import ProgressBarStatus from "./Components/ProgressBarStatus";
import ProgressBarSelect from "./Components/ProgressBarSelect";
import ButtonPanel from "./Components/ButtonPanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProgressBar: 0,
      buttons: [],
      bars: [],
      limit: 0
    };

    this.changeBars = this.changeBars.bind(this);
    this.setNewBarValue = this.setNewBarValue.bind(this);
    this.setCurrentProgressBar = this.setCurrentProgressBar.bind(this);
  }

  //fetching data from the endpoints and setting data in to the app state
  async componentDidMount() {
    const resultProgress = await fetch("http://pb-api.herokuapp.com/bars");
    const resultData = await resultProgress.json();
    this.setState({
      buttons: resultData.buttons,
      bars: resultData.bars,
      limit: resultData.limit
    });
  }

  //helper method for changing  the progressbar values on clicking the buttons and setting new value in to state
  changeBars(buttonLabel) {
    let barList = this.state.bars;
    let newBarList = barList.map((barValue, index) => {
      let newValue = barValue + buttonLabel;
      let barIndex = index + 1;
      if (
        barIndex === parseInt(this.state.currentProgressBar) &&
        newValue <= this.state.limit &&
        newValue >= 0
      ) {
        return this.setNewBarValue(buttonLabel, barValue);
      } else {
        return barValue;
      }
    });
    this.setState({
      bars: newBarList,
      currentProgressBar: this.state.currentProgressBar
    });
  }

  //helper method adding/reducing the button value to the progressbar value
  setNewBarValue(buttonLabel, barValue) {
    return barValue + buttonLabel;
  }

  //helper method setting the state of current selected dropdown
  setCurrentProgressBar(selectedValue) {
    this.setState({ currentProgressBar: selectedValue });
  }

  render() {
    return (
      <div className="App">
        {this.state.bars.map(barDefaultValue => {
          return (
            <ProgressBarStatus
              barValue={barDefaultValue}
              limit={this.state.limit}
            />
          );
        })}
        <ProgressBarSelect
          setCurrentProgressBar={this.setCurrentProgressBar}
          barsList={this.state.bars}
        />
        <ButtonPanel
          barList={this.state.bars}
          buttonLabel={this.state.buttons}
          changeBars={this.changeBars}
          currentProgressBar={this.state.currentProgressBar}
        />
      </div>
    );
  }
}
export default App;
