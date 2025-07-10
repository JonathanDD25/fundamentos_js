/* La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en el concepto de “objetos”, que pueden contener datos y comportamientos. Es una forma de estructurar software que facilita la modelación de entidades del mundo real y la reutilización de código. La Programación Orientada a Objetos (POO) se construye sobre dos conceptos fundamentales que provienen de paradigmas anteriores: la programación con estado y el paso de mensajes. En la POO, los objetos son entidades que encapsulan tanto datos (atributos) como comportamientos (métodos), permitiendo una representación más natural y modular de las aplicaciones.

Conceptos clave
Objeto: Es una instancia de una clase, que contiene atributos (datos) y métodos (funciones o comportamientos).

Clase: Es una plantilla o molde que define las propiedades (atributos) y comportamientos (métodos) comunes para un conjunto de objetos.

Encapsulamiento: Es el mecanismo para ocultar los detalles internos de un objeto y exponer solo lo necesario mediante interfaces (métodos públicos).

Herencia: Permite crear nuevas clases basadas en clases existentes, reutilizando y extendiendo su funcionalidad.

Polimorfismo: Permite que diferentes clases implementen métodos con el mismo nombre, pero comportamientos diferentes según la clase que los implemente.

Abstracción: Consiste en enfocarse en los aspectos relevantes de un objeto, ignorando detalles irrelevantes.

un constructor es un metodo especial dentro de una clase cuya funcion principal es inicializar un objeto cuando se crea. el constructor puede ser pensado como el encargado de dar identidad inicial a cada objeto. el constructor prepara el objeto para usarse.

constructor

asigna valores iniciales
se ejecuta automaticamente cuando se utiliza la palabra reservada new para crear un objeto
solo hay uno por clase (aunque puede haber sobrecarga en algunos lenguajes como java o c#).
inicia los atributos (tambien llamados propiedades).

atributos

Datos o características que definen el estado de un objeto
Se guardan como variables dentro de cada objeto y sirven para almacenar información sobre él.

metodos

Función asociada a una clase u objeto
Define el comportamiento o acción a realizar (lógica)
Utiliza los atributos del objeto es decir que puede modificarlos muchas veces.


escenario: 
concesionario de automoviles
en la consignataria auto S.A.S en la ciudad de cali exieten distingidos tipos de vehiculos, todos comparten algunas caracteristicas tales como: mareca, modelo, velocidad, entre otros sin embargo cada tipo de auto tiene funciones especificas que se diferencian entre si 
*/

//1. clase (class) = plano de automovil
class Automovil {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    acelerar(){
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} va a  ${this.velocidad}`);
    }
    frenar(){
        this.velocidad = 0;
        console.log(`${this.marca} ${this.modelo} se detuvo`)
    }
}

//2.  objeto() object = auto real
const auto1 = new Automovil("Toyota", "Corolla")
auto1.acelerar();
auto1.frenar();

//3. herencia = tipos de vehiculos
class Camion extends Automovil{
    cargaPeso(peso){
        console.log(`${this.marca} ${this.modelo} esta cargando ${this.peso} kg`);
    }
}

const camion1 = new Camion ("volvo", "FH16");
camion1.acelerar();
camion1.cargaPeso(5000);

//4. encapsulamiento = control del motor
class AutomovilEncapsulado {
    #motorencendido = false;
    encenderMotor(){
        this.#motorencendido = true;
        console.log("motor encendido");
    }
    apagarMotor(){
        this.#motorencendido = false;
        console.log("motor apagado");
    }
    estadoMotor(){
        return this.#motorencendido ? "encendido" : "apagado";
    }
}
const auto2 = new AutomovilEncapsulado();
auto2.encenderMotor();
console.log(auto2.estadoMotor());

//5. polimorfismo = acelerar de distintas formas
class Deportivo extends Automovil {
    acelerar() {
        this.velocidad +=30;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h (¡Veloz!)`);
    }
}
class Sedan extends Automovil {
    acelerar() {
        this.velocidad +=10;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h`);
    }
}
const ferrari = new Deportivo("Ferrari","488");
const nissan = new Sedan("Nissan","Sentra");
ferrari.acelerar();
nissan.acelerar();

//6. abstraccion = ocultar lo complejo del arranque
class AutomovilAbstracto {
    arrancar(){
        this.#verificarSistema();
        this.#inyectarCombustible();
        console.log("!Auto encendido!")
    }
    #verificarSistema(){
        console.log("Verificando sistemas...");
    }
    #inyectarCombustible(){
        console.log("Inyectando combustible...");
    }
}
const auto3 = new AutomovilAbstracto();
auto3.arrancar();

/* 
Concepto         ejemplo en automoviles
Clase            plano general de un automovil
Objeto           un ferrari real, un toyota real
Herencia         camion, deportivo heredan de automovil
Encapsulamiento   motor y su estado ocultos al exterior
Polimorfismo     cada tipo de auto acelera de forma distinta
Abstraccion      solo se llama el metodom"arrancar", sin saber los pasos
*/