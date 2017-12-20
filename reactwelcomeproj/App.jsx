import React from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
			<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>
<button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>siva</button>

         </div>
      );
   }
}
export default App;