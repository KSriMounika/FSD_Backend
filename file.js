
function getUserDetails(id) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
      
         resolve({ rollnum: "35" });

       }, 2000);
       

    })
};
const myfun = async() => {
    console.log("123");
    
    const result = await getUserDetails("35");
    console.log(result);
    console.log("456");
    console.log("456");
    
    
};
myfun();
