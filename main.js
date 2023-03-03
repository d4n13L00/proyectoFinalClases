
let alumnos = []
let materias = []
let grupos = []
let grupoMateria = []

class Alumno{
    constructor(nombre, aP, aM, edad){
        this.id = (alumnos.length > 0) ? alumnos[alumnos.length-1].id + 1 : 0
        this.nombre = nombre
        this.aP = aP
        this.aM = aM
        this.edad = edad
        this.listaInscripcion = []
    }
        adddInscripcion(nuevaInscripcion){
         this.listaInscripcion.push(nuevaInscripcion)
    }



    // componente(){
    //     return `
    //     <div id="alumno-${this.id}" style='background-color:${(this.estaAprobado())?"#e8efdb": "#efe2db"};border: 1px solid ${(this.estaAprobado())?"green": "red"}'>
    //         <h4>${this.nombre} ${this.aP} ${this.aM}</h4>
    //         <p>Edad: ${this.edad}</p>
    //     </div>
    //     `
    // }
}

class Inscripcion {
    constructor(materia, grupo, calificacion){
        this.materia = materia,
        this.grupo = grupo,
        this.calificación = calificacion
    }

}


function añadirAlumno(){
    
    let nuevoAlumno = new Alumno(document.querySelector("#nombre").value,
    document.querySelector("#aP").value,
    document.querySelector("#aM").value,
    document.querySelector("#edad").value)

    alumnos.push(nuevoAlumno)

    // nuevoAlumno.componente()
    // document.querySelector("#imprimir").innerHTML = nuevoAlumno.componente()
    listaInscripcion.push(nuevaInscripcion)

}

function añadirMateria(){

    let nuevaInscripcion = new Inscripcion(document.querySelector("#materia").value, 
    document.querySelector("#grupo").value)

    materias.push(document.querySelector("#materia").value);
    grupos.push(document.querySelector("#grupo").value);
    
    // nuevaInscripcion.addInscripcion(nuevaInscripcion)
    // enlistar()
    // alumnos[0].addInscripcion(nuevaInscripcion)
    
}



function enlistar(){
    let filtrados = []
    for(let i =0; i<alumnos.length; i++){
        alumnos[i].thisInscripcion.addInscripcion()
}
}
