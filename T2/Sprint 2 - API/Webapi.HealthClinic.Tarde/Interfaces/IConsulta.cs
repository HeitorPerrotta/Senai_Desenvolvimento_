using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IConsulta
    {
        void Cadastrar(Consulta consultaRepository);
        void Deletar(Guid Id);
        List<Consulta> Listar();
        Consulta BuscarPorId(Guid Id);
        void Atualizar(Guid Id, Consulta consulta);
    }
}