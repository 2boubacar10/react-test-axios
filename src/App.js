import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      lastname: this.state.name,
      profile_type: "professionnel"
      //_token : document.getElementsByName("_token")[0].value
    };

    const description = "Description";
    const name = "Boubacar";
    const offer_type = "Boubacar";

    const offer = {
      description: "Le champ description est obligatoire.",
      name: "Le champ name est obligatoire."
    };

    axios.get('http://localhost:8000/sanctum/csrf-cookie')
    .then(response => {
      console.log(response);
        axios.post(`http://localhost:8000/api/v1/login`, { name, description, offer_type })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    });

    /*axios.post(`http://localhost:8000/api/v1/subscriptions`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })*/
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}