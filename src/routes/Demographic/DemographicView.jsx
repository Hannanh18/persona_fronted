import React from "react";
import PropTypes from "prop-types";
import s from "./Demographic.css";
import { get } from "../../apis/Http";

class DemographicView extends React.Component {
  constructor() {
    super();
    this.state = {
      demographic: {
        name: "",
        gender: "",
        age: "",
        telephone: "",
        email: "",
        address: ""
      },
    };
  }

  componentWillMount() {
    get("api/demographics").then((data) => {
      const demographic = data[0];
      this.setState({
        demographic: {
          name: demographic.name,
          gender: demographic.gender,
          age: demographic.age,
          telephone: demographic.telephone,
          email: demographic.email,
          address: demographic.address,
        },
      });
      console.log(this.state.demographic);
    });
  }

  render() {
    const demographic = this.state.demographic;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.title}>人口属性</span>
          <table>
            <tr >
              <td>姓名: </td>
              <td>{demographic.name}</td>
            </tr>
            <tr>
              <td>性别: </td>
              <td>{demographic.gender}</td>
            </tr>
            <tr>
              <td>年龄: </td>
              <td>{demographic.age}</td>
            </tr>
            <tr>
              <td>电话号码: </td>
              <td>{demographic.telephone}</td>
            </tr>
            <tr>
              <td>邮箱: </td>
              <td>{demographic.email}</td>
            </tr>
            <tr>
              <td>家庭住址: </td>
              <td>{demographic.address}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default DemographicView;
