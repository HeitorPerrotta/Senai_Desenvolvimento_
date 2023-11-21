using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IMedico
    {
        void Cadastrar(Medico medico);
        void Atualizar(Guid Id, Medico medico);
        List<Medico> BuscarPorEspecialidade(Especialidade especialidade);
        Medico BuscarPorId(Guid Id);
        void Deletar(Guid Id);
        List<Medico> Listar();
        List<Consulta> ListarConsulta(Guid Id);
        List<Paciente> MinhasConsultas(Guid Id);
    }
}
