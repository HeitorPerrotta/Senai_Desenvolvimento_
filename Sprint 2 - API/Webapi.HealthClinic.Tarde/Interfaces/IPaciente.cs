using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IPaciente
    {
        void Cadastrar(Paciente paciente);
        List<Paciente> Listar();
        Paciente BuscarPorId(Guid id);
        void Deletar(Guid id);
        void Atualizar(Guid id, Paciente paciente);
        List<Consulta> ListarConsulta(Guid id);
    }
}
