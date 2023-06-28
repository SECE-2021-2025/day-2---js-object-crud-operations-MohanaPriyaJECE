const user=[
    {id : 1,
    name : "Priya",
    age:19
   },
   {
       id:2,
       name :"Hari",
       age:24
   }]
   console.log("Original Object")
   console.log(user)
   
   //Add User
   console.log("After Adding User")
   const adduser=(obj)=>{
       user.push({id : 3,name :'Ram',age :30})
      
   }
   const res=adduser(user)
   console.log(user)
   
   /*another method*/
    let add=(id,obj)=>{
         obj.splice(id-1, 0,{id:4,name:'Sarath',age:27,})
         obj.join('')
     }
   let Adduser=add(3,user)
   console.log('after adding')
   console.log(user)
   
   
   //Edit User
   console.log("After Editing")
   const edituser=(id,key,value)=>
   {
      const index = user.findIndex( item => item.id === id );
      if(index===-1)
      {
        console.log('Id not found')
        return user
      }
      user[index][key]=value
      return user
   }
   const edit=edituser(2,'age',35)
   console.log(user)

   
   //Edit user
   console.log("after editing")
   const EditUser = user.map(detail => {
     if (detail.id == 1) {
     detail.name='sabi';
     detail.age='24'
    }
    return detail;
   })
   console.log(user);
   
   
   //Deleting
   const deleteuser=(id)=>
   {
       const removeIndex = user.findIndex( item => item.id === id );
       user.splice( removeIndex, 1 );
   }
   const del=deleteuser(2)
   console.log("After Deleting")
   console.log(user)
   
   
   //Get User
   const getuser=(id)=>{
       return user.find(item=>item.id===id);
       
   }
   const obj=getuser(1)
   console.log("Getting User")
    console.log("id : ",obj.id)
    console.log("name : ",obj.name)
    console.log("age : ",obj.age)
    
    
    //Another method
    const Getuser=(id)=>{
       console.log(user[id-1])
   }
   console.log('After Getting User')
     let getdetail=Getuser(1)
     
    
   

    