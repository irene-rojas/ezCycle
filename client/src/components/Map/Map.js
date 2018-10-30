import React from "react";
// import "./Map.css";
import L from "leaflet";



class Map extends React.Component {
//   state = {
//     message: "",
//     animating: false
//   };
//not totallly sure what the map state will be here, probably manipulated 

componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }
  render() {
    return <div id="map"></div>
  }
}

//   componentDidUpdate({ score, topScore }, prevState) {
//     const newState = { animating: true };

//     if (score === 0 && topScore === 0) {
//       newState.message = "";
//     } else if (score === 0 && topScore > 0) {
//       newState.message = "incorrect";
//     } else {
//       newState.message = "correct";
//     }

//     if (score !== this.props.score || this.state.message !== newState.message) {
//       this.setState(newState);
//     }
//   }

//   renderMessage = () => {
//     switch (this.state.message) {
//     case "correct":
//       return "You guessed correctly!";
//     case "incorrect":
//       return "You guessed incorrectly!";
//     default:
//       return "Click an image to begin!";
//     }
//   };

//   render() {
//     return (
//       <li
//         className={this.state.animating ? this.state.message : ""}
//         onAnimationEnd={() => this.setState({ animating: false })}
//       >
//         {this.renderMessage()}
//       </li>
//     );
//   }
// }

export default Map;
