import React, {Component} from 'react'

export default class Task extends Component{
  state = {
    tasks:[],
    objetos:'',
  
  }

  handleChange = (e) =>{
    this.setState({
      objetos: e.target.value
    })
    
  }
  handleKeyDown = (e)=>{
   if(e.key==='Enter'){
     this.submitObject()
   }
  }
  submitObject = () =>{
    let {objetos,tasks,id} = this.state
    if(objetos!=''){
   this.setState({
     tasks:tasks.concat({objetos,
      id:Date.now()}),
      objetos:'',
  })}
  }

  removeObject = (id) =>{
    let {tasks} = this.state
    this.setState({
      tasks:tasks.filter((item)=>(item.id != id )
    
      )
    })
    
  }
  

  render(){
    let {handleChange, submitObject, removeObject, handleKeyDown} = this
    let{objetos}= this.state
    return(
      <div>
        <h1>ToDo Básico</h1>
        <input onChange={handleChange} onKeyDown={handleKeyDown} value={objetos}></input>
        <button onClick={submitObject}>ADD</button>
       
        {this.state.tasks.map((item)=>(
          <div>
            <h2>{item.objetos}</h2>
            <button onClick={()=>(removeObject(item.id))}>x</button>
          </div>
        ))}
       
        <h1>{this.state.b}</h1>
      </div>
    )
  }
}