// ** Prueba Evaluable TypeScript **
var SaleEmployee = /** @class */ (function () {
    function SaleEmployee(name, surname, email, birthDate, sdUnit, area) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = new Date(birthDate);
        this.sdUnit = sdUnit;
        this.area = area;
    }
    SaleEmployee.prototype.setName = function (name) {
        this.name = name;
    };
    SaleEmployee.prototype.getName = function () {
        return "Name: ".concat(this.name);
    };
    SaleEmployee.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    SaleEmployee.prototype.getSurname = function () {
        return "Surname: ".concat(this.surname);
    };
    SaleEmployee.prototype.setEmail = function (email) {
        this.email = email;
    };
    SaleEmployee.prototype.getEmail = function () {
        return "Email: ".concat(this.email);
    };
    SaleEmployee.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    SaleEmployee.prototype.setSdUnit = function (name) {
        this.name = name;
    };
    SaleEmployee.prototype.getSdUnit = function () {
        return "Name: ".concat(this.name);
    };
    SaleEmployee.prototype.setArea = function (name) {
        this.name = name;
    };
    SaleEmployee.prototype.getArea = function () {
        return "Name: ".concat(this.name);
    };
    return SaleEmployee;
}());
var Employee = new SaleEmployee('Jorge', 'Borrego', 'xurxoster', '19-01-1978', 'ventas', 'Ponferrada');
console.log(Employee);
