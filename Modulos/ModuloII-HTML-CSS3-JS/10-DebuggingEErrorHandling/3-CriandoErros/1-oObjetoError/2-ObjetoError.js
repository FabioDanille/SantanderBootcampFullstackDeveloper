// Também é possível dar nome ao erro, ex:

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage'; // eis o nome

throw MeuErro;