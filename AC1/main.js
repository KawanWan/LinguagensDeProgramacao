
class Main {
    #pacientesLista;

    constructor() {
        this.#pacientesLista = [];
    }

    addPaciente(paciente) {
        this.#pacientesLista.push(paciente);
    }

    addMedicamentoPaciente(idPaciente, codigoMedicamento, nome, tipo) {
        let tempMed = new Medicamento(codigoMedicamento, nome, tipo);

        for (let i = 0; i < this.#pacientesLista.length; i++) {
            if (this.#pacientesLista[i].getId() == idPaciente) {
                this.#pacientesLista[i].inserirMedicamentoPrescrito(tempMed);
            }
        }
    }

    transferirMedicamento(idPacienteOrigem, idPacienteDestino, codigoMedicamento) {
        let tempMed;

        for (let i = 0; i < this.#pacientesLista.length; i++) {
            if (this.#pacientesLista[i].getId() == idPacienteOrigem) {
                tempMed = this.#pacientesLista[i].getMedicamentoPrescrito(codigoMedicamento);
                this.#pacientesLista[i].removerMedicamentoPrescrito(codigoMedicamento);
            }
        }
        for (let i = 0; i < this.#pacientesLista.length; i++) {
            if (this.#pacientesLista[i].getId() == idPacienteDestino) {
                this.#pacientesLista[i].inserirMedicamentoPrescrito(tempMed);

            }
        }
    }

    mostrarTodosOsPacientes(){
        this.#pacientesLista.forEach(paciente => {
            paciente.imprimirCompleto();
        });
    }
}



let main = new Main();

main.addPaciente(new Paciente(1, "Maria"));


main.addMedicamentoPaciente(1, 1, "Paracetamol", "Analgésico");
main.addMedicamentoPaciente(1, 2, "Amoxicilina", "Antibiótico");
main.mostrarTodosOsPacientes();



main.addPaciente(new Paciente(2, "João"));
main.transferirMedicamento(1, 2, 1);
main.mostrarTodosOsPacientes();
