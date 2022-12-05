const key = location.search.slice(1);
get(key).then((res)=>{
  $('body').innerHTML=marked.parse(res,{breaks:true});
}).catch((rea)=>{
  alert(rea);
})