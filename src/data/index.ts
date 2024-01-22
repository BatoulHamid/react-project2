import { IProduct,IFormInput } from "../interfaces";


export const productList:IProduct[]=[
    {
        id:"1",
        title: "first title",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imgURL:
        "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxN3x8Y2FyfGVufDB8fHx8MTcwNTg0NTUyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
      
        price:"2400$",
        colors:["#450a0a" ,"000000","1f2937" ],
        category:{
            name:"cars",
            imgURL:"https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxN3x8Y2FyfGVufDB8fHx8MTcwNTg0NTUyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    
        },
    },
        {
            id:"2",
        title: "second title",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imgURL:
        "https://images.unsplash.com/photo-1541447270888-83e8494f9c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzNHx8Y2FyfGVufDB8fHx8MTcwNTg0NTY1OXww&ixlib=rb-4.0.3&q=80&w=1080",
      
        price:"2400$",
        colors:["#450a0a" ,"000000","1f2937" ],
        category:{
            name:"cars",
            imgURL:"https://images.unsplash.com/photo-1541447270888-83e8494f9c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzNHx8Y2FyfGVufDB8fHx8MTcwNTg0NTY1OXww&ixlib=rb-4.0.3&q=80&w=1080",
        },
    
    
    },
{
    id:"3",
        title: "third title",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        imgURL:
        "https://images.unsplash.com/photo-1541447270888-83e8494f9c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzNHx8Y2FyfGVufDB8fHx8MTcwNTg0NTY1OXww&ixlib=rb-4.0.3&q=80&w=1080",
      
        price:"2400$",
        colors:["#450a0a" ,"000000","1f2937" ],
        category:{
            name:"cars",
            imgURL:"https://images.unsplash.com/photo-1541447270888-83e8494f9c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzNHx8Y2FyfGVufDB8fHx8MTcwNTg0NTY1OXww&ixlib=rb-4.0.3&q=80&w=1080",
},

},


















]

export const formInputList:IFormInput[]=[
  { id:"title",
  name: "title",
 label:"title",
  type:"text",} ,
  {
    id:"description",
    name: "description",
   label:"description",
    type:"text",
  },
  {
    id:"image",
    name: "image",
   label:"image",
    type:"text",
  }


]