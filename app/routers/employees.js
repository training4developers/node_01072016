"use strict";

let
	router = require("express").Router(),
	employees = [
		{ id: 1, firstName: "Mary", lastName: "Romagnoli" },
		{ id: 2, firstName: "Devin", lastName: "Mitchell" },
		{ id: 3, firstName: "Chris", lastName: "Jones" },
		{ id: 4, firstName: "Henock", lastName: "Mamo" },
		{ id: 5, firstName: "Joe", lastName: "Bisaillon" }
	];

function findEmployee(empId) {
	return employees.filter(function(employee) {
		return employee.id === parseInt(empId, 10);
	})[0];
}

function getEmployeeIndex(employee) {
	return employees.indexOf(employee);
}

function getEmployeeIndexById(empId) {
	return getEmployeeIndex(findEmployee(empId));
}

router.route("/employees")
	.get(function(req, res) {
		res.json(employees);
	})
	.post(function(req, res) {
		employees.push(req.body);
		res.end();
	});

router.route("/employees/:employeeId")
	.get(function(req, res) {
		res.json(findEmployee(req.params.employeeId));
	})
	.delete(function(req, res) {
		let empIndex = getEmployeeIndexById(req.params.employeeId);
		employees.splice(empIndex, 1);
		res.status(200).end();
	})
	.put(function(req, res) {
		let empIndex = getEmployeeIndexById(req.params.employeeId);
		employees.splice(empIndex, 1);
		employees.push(req.body);
		res.status(200).end();
	});

module.exports = router;
