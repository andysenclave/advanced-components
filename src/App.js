import React, { Component } from 'react';
import Popover from 'react-simple-popover';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      open: false,
      popType: {
        target: 'sortByTarget',
        container: 'sortByContainer',
      }
    };
  }
 
  handleClick(type, e) {
    console.log(type, e)
    this.setPopOverTarget(type);
    this.setState({open: !this.state.open});
  }
 
  handleClose(e) {
    this.setState({open: false});
  }

  setPopOverTarget(type) {
    let popType = {
      target: '',
      container: '',
    }
    switch (type) {
      case 'sortBy' : {
        popType.target = 'sortByTarget';
        popType.container = 'sortByContainer';
        break;
      }
      case 'category' : {
        popType.target = 'categoryTarget';
        popType.container = 'categoryContainer';
        break;
      }
      default : {
        break;
      }
    }
  }

  render() {
    const { target, container } = this.state.popType; 
    return (
      <div className="App">
       <div className="modal">
        <section className="widget-row">
          <div className="sort-by" ref="sortByContainer">
            <button
              className="button"
              ref="sortyByTarget"
              onClick={this.handleClick.bind('sortBy')}>Popover</button>
            <Popover
              placement='bottom'
              container={this.refs[container]}
              target={this.refs[target]}
              show={this.state.open}
              style={{width : 'fit-content'}}
              onHide={this.handleClose.bind(this)} >
                <section>
                  <section className="pop-info">
                    <p>This is popover</p>
                  </section>
                  <section className="button-wrap">
                    <button
                      className="button"
                      onClick={this.handleClick.bind(this)}>Button1</button>
                    <button
                      className="button"
                      onClick={this.handleClick.bind(this)}>Button2</button>
                    <button
                      className="button"
                      onClick={this.handleClick.bind(this)}>Button3</button>
                  </section>
                </section>
            </Popover>
          </div>
          <div className="category" ref="categoryContainer">
            <button
              className="button"
              ref="categoryTarget"
              onClick={this.handleClick.bind(this)}>Popover</button>
            <Popover
              placement='bottom'
              container={this.refs.categoryContainer}
              target={this.refs.categoryTarget}
              show={this.state.open}
              style={{width : 'fit-content'}}
              onHide={this.handleClose.bind(this)} >
                <section>
                  <section className="pop-info">
                    <p>This is popover</p>
                  </section>
                  <section className="button-wrap">
                    <button
                      className="button"
                      onClick={this.handleClick.bind(this)}>Button1</button>
                    <button
                      className="button"
                      onClick={this.handleClick.bind(this)}>Button2</button>
                    <button
                      className="button"
                      onClick={this.handleClick.bind(this)}>Button3</button>
                  </section>
                </section>
            </Popover>
          </div>
        </section>
       </div>
      </div>
    );
  }
}

export default App;
