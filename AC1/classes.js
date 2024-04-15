class Paciente {
    #id;
    #nome;
    #medicamentosPrescritos;

    constructor(id, nome) {
        this.#id = id;
        this.#nome = nome;
        this.#medicamentosPrescritos = [];
    }

    getId() {
        return this.#id;
    }

    inserirMedicamentoPrescrito(medicamento) {
        this.#medicamentosPrescritos.push(medicamento);
    }

    removerMedicamentoPrescrito(codigo) {
        for (let index = 0; index < this.#medicamentosPrescritos.length; index++) {
            if (this.#medicamentosPrescritos[index].getCodigo() === codigo) {
                this.#medicamentosPrescritos.splice(index, 1);
            }
        }
    }

    getMedicamentoPrescrito(codigo) {
        for (let item of this.#medicamentosPrescritos) {
            if (item.getCodigo() === codigo) {
                return item;
            }

        }
    }

    imprimir(){
        console.log(
            `id: ${this.#id}
             nome: ${this.#nome}`
        );
    }

    imprimirCompleto () {
        this.imprimir();
        console.log("Medicamentos: " );
        
        for (let i = 0; i < this.#medicamentosPrescritos.length; i++){
            if (this.#medicamentosPrescritos != undefined){
            this.#medicamentosPrescritos[i].imprimir();
            }
        }
    }
}

class Medicamento {
    #codigo;
    #nome;
    #tipo;

    constructor(codigo, nome, tipo) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#tipo = tipo;
    }

    getCodigo () {
        return this.#codigo;
    }

    imprimir() {
        
        console.log(
            
            `codigo: ${this.#codigo}
             nome: ${this.#nome}
             tipo: ${this.#tipo}`
             
            
        );
    }
}

