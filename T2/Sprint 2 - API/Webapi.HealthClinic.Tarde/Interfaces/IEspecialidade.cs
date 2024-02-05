using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IEspecialidade
    {
        void Cadastrar(Especialidade especialidade);
        void Deletar(Guid Id);
        List<Especialidade> Listar();
    }
}
