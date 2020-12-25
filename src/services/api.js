export function fetchApi(data){
    try{
        fetch(`https://api.github.com/users/${data}`)
        .then(res => res.json())
        .then(data =>{
           storeUserData(data)
         })
        .catch(err=>{
            console.log(err);
         })
    }catch(e){
        console.log(e.message);
    }
}
var StoreData =[];

 async function storeUserData(data){
   var userData ={ 
      id:data.id ,
      name:data.name,
      username:data.login,
      profile_Image:data.avatar_url,
      url:data.url,
      followers:data.followers,
      created_At:data.created_at,
      updated_At:data.updated_at,
      repository:data.public_repos
   }
  await StoreData.push(userData);
}

export var StoreData;
