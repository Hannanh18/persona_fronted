import React from "react";
import PropTypes from "prop-types";
import s from "./Consume.css";
import { get } from "../../apis/Http";

class ConsumeView extends React.Component {
  constructor() {
    super();
    this.state = {
      consume: {
        businessTravel: "",
        overseasTravel: "",
        relaxTravel: "",
        catering: "",
        car: "",
        mother: "",
        financial:""
      },
    };
  }

  componentWillMount() {
    get("api/consume").then((data) => {
      const consume = data[0];
      this.setState({
        consume: {
          businessTravel: consume.businessTravel,
          overseasTravel: consume.overseasTravel,
          relaxTravel: consume.relaxTravel,
          catering: consume.catering,
          car: consume.car,
          mother: consume.mother,
          financial: consume.financial,
        },
      });
      console.log(this.state.consume);
    });
  }

  render() {
    const consume = this.state.consume;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.title}>消费特征</span>
          <table>
            <tr >
              <td>差旅人群: </td>
              <td>{consume.businessTravel}</td>
            </tr>
            <tr>
              <td>境外人群: </td>
              <td>{consume.overseasTravel}</td>
            </tr>
            <tr>
              <td>旅差人群: </td>
              <td>{consume.relaxTravel}</td>
            </tr>
            <tr>
              <td>餐饮用户: </td>
              <td>{consume.catering}</td>
            </tr>
            <tr>
              <td>汽车用户: </td>
              <td>{consume.car}</td>
            </tr>
            <tr>
              <td>母婴用户: </td>
              <td>{consume.mother}</td>
            </tr>
            <tr>
              <td>理财人群: </td>
              <td>{consume.financial}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ConsumeView;
