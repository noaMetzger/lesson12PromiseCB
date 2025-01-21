
function shopping(x,y){
    return new Promise((resolve,reject)=>{
        let a=x.sort();
        let b=y.sort();
        for (let i = 0; i < a.length; i++) {  
            if(a[i] !=b[i])
            {
                reject("You forgot some products")   
            }
        }
        resolve("Good work")

    })
}



const res=shopping([1,4,3],[3,1,2])
res.then((val)=>{console.log(val)}).catch((err)=>{console.log(err)}).finally(()=>console.log('...'))


function play(){
    return new Promise((res,rej)=>{
        let x=Math.floor(Math.random()*6+1)
        let y=Math.floor(Math.random()*6+1)
        setTimeout(()=>{
          if(x==y)
              res('lucky  '+x)
          else{
            rej('num1 is '+x+' num2 is '+y)
          }
        },3000)
    })
}

const p=play()
p.then((val)=>{console.log(val)}).catch((err)=>{console.log(err)}).finally(()=>console.log('...'))

function playCB(func){
        let x=Math.floor(Math.random()*6+1)
        let y=Math.floor(Math.random()*6+1)
        setTimeout(()=>{
             func(x,y)
          },3000)
}

function func(x,y)
{
    if(x==y)
      console.log('lucky  '+x)
    else
      console.log('num1 is '+x+' num2 is '+y)
}

playCB(func)

















