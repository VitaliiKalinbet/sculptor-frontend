import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '../default/Button/Button';
// import Input from '../default/Input/Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button color="white" />
        <Button iconButton>
          <DeleteIcon />
        </Button>
        {/* <Input /> */}
      </div>
    );
  }
}
export default hot(App);
