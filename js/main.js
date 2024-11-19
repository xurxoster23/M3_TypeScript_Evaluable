var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ** Prueba Evaluable TypeScript **
// * Clase Empleado de Ventas *
class SalesEmployee {
    // Método Constructor
    constructor(name, surname, email, birthDate, sdUnit, area) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthDate = new Date(birthDate);
        this.sdUnit = sdUnit;
        this.area = area;
    }
    // Métodos Setter y Getters
    setName(v) {
        this.name = v;
    }
    getName() {
        return this.name;
    }
    setSurname(v) {
        this.surname = v;
    }
    getSurname() {
        return this.surname;
    }
    setEmail(v) {
        this.email = v;
    }
    getEmail() {
        return this.email;
    }
    setBirthDate(v) {
        this.birthDate = new Date(v);
    }
    getBirthDate() {
        return this.birthDate;
    }
    setSdUnit(v) {
        this.sdUnit = v;
    }
    getSdUnit() {
        return this.sdUnit;
    }
    setArea(v) {
        this.area = v;
    }
    getArea() {
        return this.area;
    }
}
// * Función Promise *
function setEmployee(name, surname, email, birthDate, sdUnit, area) {
    return new Promise((resolve, reject) => {
        if (name === '' || surname === '' || email === '' || birthDate === '' || sdUnit === '' || area === '')
            reject({ mensaje: `Datos no válidos` });
        setTimeout(() => {
            resolve(new SalesEmployee(name, surname, email, birthDate, sdUnit, area));
        }, 2000);
    });
}
// * Función async-await *
function addEmployee() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let salesEmployee = yield setEmployee(document.getElementById('name').value.toLocaleUpperCase(), document.getElementById('surname').value.toLocaleUpperCase(), document.getElementById('email').value.toLocaleLowerCase(), document.getElementById('birthDate').value, document.getElementById('sdUnit').value.toLocaleUpperCase(), document.getElementById('area').value.toLocaleUpperCase());
            console.log(`
            Name:       ${salesEmployee.getName()},
            Surname:    ${salesEmployee.getSurname()},
            Email:      ${salesEmployee.getEmail()},
            Birthday: 
                Day:    ${salesEmployee.getBirthDate().getDate()}
                Month:  ${salesEmployee.getBirthDate().getMonth()}
                Year:   ${salesEmployee.getBirthDate().getFullYear()}
            Department: ${salesEmployee.getSdUnit()},
            Area:       ${salesEmployee.getArea()}    
            `);
        }
        catch (error) {
            console.error(error);
        }
    });
}
