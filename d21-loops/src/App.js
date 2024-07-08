import logo from './logo.svg';
import './App.css';

function App() {

  let a=50;

return (
<div className="App">
  <button onClick={()=>{
  while(a<=100){
  console.log(`${a}`);
  a++;
  }
  }}
  >While</button>

  <button onClick={()=>{
  let b=600;
  do{
  console.log("do while code is executing atleast once");
  console.log(b);
  b++;
  }while(b<1100); 
  }}
  >do While</button>

  <button onClick={()=>{
  for(let i=10;i<=200;i++){
  if(i>=100 && i<=150){
  continue;
  }
  console.log(i);
  //if(i==250000){
  // break;
  //}
  }
  }}
  >for loop</button>

  <button onClick={()=>{
  for(let i=1;i<=1000;i++){
  for(let j=1;j<=10;j++){
  console.log(`${i}*${j}=${i*j}`);
  }
  }
  }}>Nested loops</button>


<button onClick={()=>{
   
   for(let i=1;i<100;i++){
    if(i==5 ||i==6 || i==7 || i==12 || i==15||i==22||i==29|| i==35|| i==42|| i==46
      || i==57|| i==58|| i==93|| i==97)break;
    for(let j=1;j<=10;j++)
    console.log(`${i}*${j}=${i*j}`); 
   }
   
   for(let i=8;i<100;i++){
    if(i==7 || i==12 || i==15 ||i==22||i==29|| i==35|| i==42|| i==46
      || i==57|| i==58|| i==93 || i==97)continue;
    for(let j=1;j<=10;j++)
    console.log(`${i}*${j}=${i*j}`); 
   }
   
}}
>for loop</button>

    </div>
  );
}

export default App;
