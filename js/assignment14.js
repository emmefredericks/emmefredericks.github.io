//Problem 1
const employees=[
  {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raise: true,
  },
  {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raise: true,
  },
  {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raise: false,
  },
];
console.log('Problem1',employees);

//Problem 2
const company={
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees,
  };
console.log('Problem2',company);

//Problem 3
function addEmployee(firstName, department, designation, salary, raise){
  const newEmployee = {firstName, department, designation, salary, raise};
  employees.push(newEmployee);
}
addEmployee('Anna','Tech','Executive',25600,false);
console.log('Problem3',employees);

//Problem 4
let totalSalary=0;
for (const id in employees){
  totalSalary += employees[id].salary;
}
  console.log('Problem4',totalSalary);

//Problem 5
for (const id in employees){
  if(employees[id].raise){
    employees[id].salary *=1.1;
    employees[id].raise=false;
  }
}
console.log('Problem5',employees);

//Problem 6
const peopleWorkingFromHome= ['Anna','Sam'];
for (const id in employees){
  employees[id].wfh=peopleWorkingFromHome.includes(employees[id].firstName)
}
console.log('Problem6',employees);
