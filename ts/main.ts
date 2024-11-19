// ** Prueba Evaluable TypeScript **

// * Interface *

interface Employee {
    name        :   string;
    surname     :   string;
    email       :   string;
    birthDate   :   Date;
}


// * Clase Empleado de Ventas *
class SalesEmployee implements Employee {

    // Definición de Propiedades
    name        :   string;
    surname     :   string;
    email       :   string;
    birthDate   :   Date;
    sdUnit      :   string;
    area        :   string;

    // Método Constructor
    constructor(name: string, surname: string, email: string, birthDate: string, sdUnit: string, area: string) {
        this.name      =   name;
        this.surname   =   surname;
        this.email     =   email;
        this.birthDate =   new Date(birthDate);
        this.sdUnit    =   sdUnit;
        this.area      =   area;    
    }
    // Métodos Setter y Getters
    public setName(v : string) {
        this.name  =   v;
    }
    public getName() : string {
        return this.name;
    }
    public setSurname(v : string) {
        this.surname  =   v;
    }
    public getSurname() : string {
        return this.surname;
    }
    public setEmail(v : string) {
        this.email  =   v;
    }
    public getEmail() : string {
        return this.email;
    }
    public setBirthDate(v: string){
        this.birthDate = new Date(v);
    }
    public getBirthDate(): Date {
        return this.birthDate;
    }
    public setSdUnit(v : string) {
        this.sdUnit  =   v;
    }
    public getSdUnit() : string {
        return this.sdUnit;
    }
    public setArea(v : string) {
        this.area  =   v;
    }
    public getArea() : string {
        return this.area;
    }
}

// * Función Promise *
function setEmployee(name:string, surname: string, email: string, birthDate: string, sdUnit: string, area: string): any {
    return new Promise<SalesEmployee>((resolve, reject) => {
        if (
            name === '' || surname === '' || email === '' || birthDate === '' || sdUnit === '' || area === ''
        ) 
        reject({mensaje: `Datos no válidos`});
        setTimeout(() => {
            resolve(new SalesEmployee(name,surname,email,birthDate,sdUnit,area))
        },2000);
    })
}

// * Función async-await *
async function addEmployee() {
    try {
        let salesEmployee = await setEmployee(
            (<HTMLInputElement>document.getElementById('name')).value.toLocaleUpperCase(),
            (<HTMLInputElement>document.getElementById('surname')).value.toLocaleUpperCase(),
            (<HTMLInputElement>document.getElementById('email')).value.toLocaleLowerCase(),
            (<HTMLInputElement>document.getElementById('birthDate')).value,
            (<HTMLInputElement>document.getElementById('sdUnit')).value.toLocaleUpperCase(),
            (<HTMLInputElement>document.getElementById('area')).value.toLocaleUpperCase()
        );
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
    } catch (error) {
        console.error(error);
    }
}












