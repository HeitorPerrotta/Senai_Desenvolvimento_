using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IFeedback
    {
        void Cadastrar(Feedback feedback);
        void Deletar(Guid Id);
    }
}
