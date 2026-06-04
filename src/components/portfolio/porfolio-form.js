import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioForm extends Component {
    constructor(props){
        super(props);
        // los valores por defectos son nulos si queremos que tenga un valor por defecto lo ñadimos aqui en vez de las dobles comillas "valor por defecto"
        this.state = {
            name : "",
            description: "", 
            url: "",
            category: "",
            position: "",
            thumb_image : "",
            banner_image : "",
            logo: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm(){
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);

        return formData;
    }

    handleChange(event) {
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios
        .post(
            "https://emontalban.devcamp.space/portfolio/portfolio_items",
            this.buildForm(),
            { withCredentials: true }
        )
        .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
            console.log("response", response);
        })
        .catch(error => {
            console.log("portfolio form handleSubmit error", error);
        });
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h1> este es el profolio funcionanado</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type='text' name='name' placeholder='Portfolio Item Name' value = {this.state.name} onChange={this.handleChange}></input>

                    <input type='text' name="url" placeholder='URL' value = {this.state.url} onChange={this.handleChange}></input>
                </div>
                <div>
                    <input type='text' name='position' placeholder='Position' value = {this.state.position} onChange={this.handleChange}></input>

                    <select name="category" value = {this.state.category} onChange={this.handleChange}>
                        <option>Category</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="Social">Social</option>
                        <option value="Productividad">Productividad</option>
                        <option value="Automatizacion">Automatizacion</option>
                        <option value="Eventos">Eventos</option>
                        <option value="Bootcamp">Bootcamp</option>
                        <option value="Desarrollo">Desarrollo</option>
                        <option value="Educacion">Educacion</option>
                        <option value="Analytics">Analytics</option>
                        <option value="EdTech">EdTech</option>
                        <option value="Seguridad">Seguridad</option>
                        <option value="Open Source">Open Source</option>
                    </select>
                </div>
                <div>
                    <textarea type="text" name="description" placeholder='Description' value = {this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
                
            </form>
        </div>
        );
    }
}