const getStudent = (req,res)=>{
    //data which is getting from database
    let data = {name:"Mounika",roll:"35"};
    //sending the response with status code
    res.status(200).json({data:data});
}
const addStudent = (req,res)=>{
    const student = req.body;
    console.log(student);
    res.status(201).json({message:"successfully added student"});
}
const updateStudent = (req,res)=>{
    const student = req.body;
    console.log(student);
    res.status(200).json({message:"successfully updated student"});
}

const deleteStudent = (req,res)=>{
    const student = req.body;
    console.log(student);
    res.status(200).json({message:"successfully deleted student"});
}



export{getStudent,addStudent, updateStudent, deleteStudent};