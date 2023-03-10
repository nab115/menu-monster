import React, {useState} from "react";
import { retreiveLocations } from '../request.js'


class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: []
      , selected:  props.selected || ''
    }
  }

  onSelect = (input)=> {
    this.props.inputHandler(input);
    this.setState({selected: input});
  }

  async componentDidMount() {
    const locs = await retreiveLocations();
    console.log(locs)
    this.setState({options: locs});
  }

  render () {
    return <select 
        name="locations"
        onChange={(event) => this.onSelect(event.target.value)}
        value={this.state.selected}
        className="dropdown"
        required>
      <option value='' disabled>{this.props.placeholder}</option>
      {this.state.options.map(op => <option value={op.value}>{op.display}</option>)}
    </select>
  };
}

export default Dropdown;