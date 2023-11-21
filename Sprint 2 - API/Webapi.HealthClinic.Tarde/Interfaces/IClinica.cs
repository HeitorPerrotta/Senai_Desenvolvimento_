using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IClinica
    {
        void Cadastrar(Clinica clinicaRepository);
        void Deletar(Guid Id);
        List<Clinica> Listar();
        Clinica BuscarPorId(Guid Id);
        void Atualizar(Guid Id, Clinica clinica);
    }
}
