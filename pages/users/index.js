import Layout from '@/components/Layout';
import React from 'react'
import axios from 'axios';

const Index = ({users}) => {
    //jsonplaceholder.typicode.com/users
    console.log(users)
   return (
     <Layout title={"Users Details"}>
       <div className="container">
         <h1>all users details</h1>
         <table className='table'>
            <thead>
                <tr className='text-bold'>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>User name</td>
                </tr>
            </thead>
            <tbody>
                {users.length >0 &&(
                    users.map((user,id)=>{
                        return (
                          <tr key={id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                          </tr>
                        );
                    })
                )}
              
            </tbody>
         </table>
       </div>
     </Layout>
   );
}

export default Index;

export async function getStaticProps(){
    try{
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        )
        return{
            props:{
                users:data
            }
        }

    }
    catch(error){

    }

}