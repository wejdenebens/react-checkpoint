import React from 'react';
import './App.css';
//import Button from './components/Button';
//import Label from './components/Label';

function App() {
  return (
   
    
    <form>
    <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         
    </div>
    <div class="form-group">
        <label for="exampleInputname1">Name</label>
        <input type="text" class="form-control" id="exampleInputname1" placeholder="Enter your Name" />
    </div>
    <div class="form-group">
         <label for="exampleInputtel1">Phone Number</label>
         <input type="text" class="form-control" id="exampleInputtel1" placeholder="Enter your Phone number" />  
     </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>  
         
   
    
    
   
        );
}

export default App;
