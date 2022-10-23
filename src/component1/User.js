import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[
            {
                name:'chaimaa',
                phone:'+212000000',
                website:'www.mahy.com',
                email:'chaimaa.mahy95@gmail.com'
            },
            {
                name:'mery',
                phone:'+212000200',
                website:'www.mery.com',
                email:'mery@gmail.com'
            }
         ]
      }
    }




    
    handleSubmit=(e)=>{
        e.preventDefault();
        const {users}=this.state
        const newItems={
          name:this.newName.value,
          phone:this.newPhone.value,
          website:this.newWebsite.value,
          email:this.newEmail.value
        }
      
        this.setState({
          users:[...this.state.users,newItems]
        })
       
        
        this.addForm.reset()
       

        console.log(newItems)
        console.log(this.state
          .users)
            
        

    }
  render() {
    return (
      <div className='container mt-2'>
        <h1 className="text-center text-capitalize alert">listes des utilisateurs</h1> <hr />
        
        <form  ref={(input)=>this.addForm=input} className='row g-3 p-3' onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="col-6">
                <input type="text" className='form-control' placeholder='Enter the name' ref={(input)=>this.newName=input}/>
            </div>
            <div className="col-6">
                <input type="text" name='phone' className='form-control' placeholder='Phone number'  ref={(input)=>this.newPhone=input}  />
            </div>
            <div className="col-6">
                <input type="text" name='website' className='form-control' placeholder='Website' ref={(input)=>this.newWebsite=input}    />
            </div>
            <div className="col-6">
                <input type="text" name='email' className='form-control' placeholder='email' ref={(input)=>this.newEmail=input}     />
            </div>
            <div className="col-12">
                <input value="save" type="submit" className='form-control text-capitalize btn btn-dark'  />
            </div>
            
        </form>
        
        {this.state.users.map((user,index)=>
        <div key={index} className="card alert alert-success">
            <p className='text-capitalize card-body'>Nom : {user.name} <br /> Phone : {user.phone} <br /> Website : {user.website} <br /> Email : {user.email}</p>
        </div>
        )}

      </div>
    )
  }
}
