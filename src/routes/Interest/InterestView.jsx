import React from "react";
import PropTypes from "prop-types";
import s from "./Interest.css";
import { get } from "../../apis/Http";

class InterestView extends React.Component {
  constructor() {
    super();
    this.state = {
      interest: {
        outdoors :'',
        travelEnthusiasts :'',
        movieGoer:'',
        techEnthusiasts :'',
        fitnessEnthusiasts :'',
        luxuries :''
      },
    };
  }

  componentWillMount() {
    get("api/intresets").then((data) => {
      const interest = data[0];
      this.setState({
        interest: {
          outdoors: interest.outdoors,
          travelEnthusiasts: interest.travelEnthusiasts,
          movieGoer: interest.movieGoer,
          techEnthusiasts: interest.techEnthusiasts,
          fitnessEnthusiasts: interest.fitnessEnthusiasts,
          luxuries: interest.luxuries,
        },
      });
      console.log(this.state.interest);
    });
  }

  render() {
    const interest = this.state.interest;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.title}>兴趣爱好</span>
          <table>
            <tr >
              <td>户外运动爱好者: </td>
              <td>{interest.outdoors}</td>
            </tr>
            <tr>
              <td>旅游爱好者: </td>
              <td>{interest.travelEnthusiasts}</td>
            </tr>
            <tr>
              <td>电影爱好者: </td>
              <td>{interest.movieGoer}</td>
            </tr>
            <tr>
              <td>科技发烧友: </td>
              <td>{interest.techEnthusiasts}</td>
            </tr>
            <tr>
              <td>健身爱好者: </td>
              <td>{interest.fitnessEnthusiasts}</td>
            </tr>
            <tr>
              <td>奢侈品爱好者: </td>
              <td>{interest.luxuries}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default InterestView;
