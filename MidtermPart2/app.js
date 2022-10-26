const express = require('express');

const app = express();

const PORT = 5000;
let employeeList = [
    {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000
    },
    {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    department: "HR",
    Salary: 50000
    }
]

app.use(express.json());

app.get("/", (req, res) =>{
    res.redirect("/employees")
})

app.get('/employees', (req, res) =>{
    return res.status(200).json({
        message: "Successfully fetched the employee",
        data: employeeList
    })
})
app.get('/employees/:department', (req, res) =>{
    const department = req.params.department;    
    
    for(let i =0; i < employeeList.length; i++){
            if(employeeList[i].department === department){
                return res.status(200).json({
                    message: "Successfully fetched the department",
                    data: employeeList[i]
                })
        }
    }
})

app.get('/employees/:id', (req, res) =>{
   const findID = employee.find((employee) => employeeList.id == id ? ture : false);
    if (findID)
    {
        return res.status(200).json({
            message: "Successfully fetched the ID",
            data: findID
        })
    }
    else
    {
        return res.status(404).json({
            message:" ID does not exist"
        })
    }

})

app.post('/employees', (req,res) =>{
    const employeeData = req.body;
    employee.push(employeeData);
    return res.status(201).json(employeeData);
})

app.listen(PORT,() => {
    console.log (`Server running on port ${PORT}`);
})