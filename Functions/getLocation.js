
const getLocation=()=>{
    return new Promise((resolve,reject)=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                resolve(position)
            },(error)=>{
                reject(error)
            })
        }else{
            alert("Geolocation is not supported by this browser.");
        }
    })
}

export default getLocation;