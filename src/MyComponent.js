import { VirtualWindow } from 'virtual-window';



const  MyComponent1 = ()=>{

} 

const  MyLastComponent = ()=>{


} 
const  SomeComponent = ()=>{

} 



function MyComponent({list}) {
    return <VirtualWindow>
      <MyComponent1/>
      {list.map(l=><SomeComponent key={l.id} data={l} />)}
      <MyLastComponent/>
   </VirtualWindow>

}

//Alternatively
function MyOtherComponent({list}) {
    return <VirtualWindow pass="data" list={list} item={<SomeComponent/>}/>
 }