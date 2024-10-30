import {create} from 'zustand';
import axios from 'axios';


const POST_BASE_URI = "https://jsonplaceholder.typicode.com"


export const usePostStore = create((set)=>({
    posts : null, 
    isLoading:true, 
    error:null,

    getAllPosts: async()=>{
      try{  const response = await axios.get(`${POST_BASE_URI}/posts`)
        const data = response.data.slice(0, 11)


        return data
      } catch(error){
        console.log("Error In Getting Posts :", error)
      }



    }, 
    createPost:async(from)=>{
        try {

            const response = await axios.post(`${POST_BASE_URI}/posts`, from)
            console.log("Created Post : ", response.data)
            
        } catch (error) {
            console.log(error)
            
        }
    }


}))