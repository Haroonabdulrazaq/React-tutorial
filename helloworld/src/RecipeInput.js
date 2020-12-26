import React, {Component} from 'react';
import './RecipeInput.css'; 

class RecipeInput extends Component{
  static defaultProps = {
    onClose(){},
    onSave(){}
  }
constructor(props){
  super(props);

  this.state = {
    title: '',
    instructions:"",
    ingredients:[''],
    img:""
  }
  this.handleChange =this.handleChange.bind(this)
  this.handleNewIngredient =this.handleNewIngredient.bind(this)
  this.handleChangeIng =this.handleChangeIng.bind(this)
  this.handleSubmit =this.handleSubmit.bind(this)
}

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleNewIngredient(e){
   const {ingredients} = this.state
   this.setState({ingredients: [...ingredients, '']})
  }
  handleChangeIng(e){
    const index = Number(e.target.name.split('-')[1]);
    let ingredients  = this.state.ingredients.map((ing, i )=>(
      i === index? e.target.value :ing
    ))
    this.setState({ingredients})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSave({...this.state})
    this.setState({
      title: '',
      instructions:"",
      ingredients:[''],
      img:""
    })
  }

render(){
 
  const onClose = this.props
  const {title, instructions, ingredients, img} = this.state;
  let inputs =  ingredients.map((ing, i )=>(
    <div
    className="reicpe-form-line"
    key={`ingredient-${i}`}>
      <label> {i + 1}.
        <input type="text"
        name={`ingredient-${i}`}
        value={ing}
        size={45}
        autocomplete="off"
        placeholder="Add new Ingredients"
        onChange={this.handleChangeIng}
        />
      </label>
    </div>
  ))
  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={this.handleSubmit}>
        <button
        type="button"
        className="close-button"
        onClick={onClose}> X
        </button>
        <div className="recipe-form-line">
          <label htmlFor='recipe-title-input'>Title</label>
          <input
            id='recipe-title-input'
            key='title'
            name='title'
            type='title'
            value={title}
            size={42}
            autocomplete="off"
            onChange={this.handleChange}
          />
        </div>
        <label
        htmlFor='recipe-instrutions-input'
        styel={{marginTop: '5px'}}>
          Instructions:
        </label>
        <textarea 
         key='instructions'
         id='recipe-instructions-input'
         type='Instructions'
         name='instructions'
         rows='8'
         cols='50'
         autoComplete='off'
         value={instructions}
         onChange={this.handleChange}
         />
         {inputs}
         <button
         type="button"
         onClick={this.handleNewIngredient}
         className="buttons">  
            + 
         </button>
         <div className="recipe-form-line">
         <label
          htmlFor='recipe-instrutions-input'
          styel={{marginTop: '5px'}}>
          Image Url:
        </label>
          <input id='recipe-img-input'
            type="text"
            placeholder="Image url"
            name='img'
            value={img}
            size={36}
            autoComplete="off"
            onChange={this.handleChange}
          />
         </div>
         <button
         type="submit"
         className="buttons"
         style={{alignSelf:"flex-end", marginRight:0}}>
           SAVE
         </button>
      </form>
    </div>
  )
}

} 

export default RecipeInput;