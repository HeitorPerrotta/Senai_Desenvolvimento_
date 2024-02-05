using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface IInstituicaoRepository
    {
        void Cadastrar(Instituicao instituicaoRepository);
        void Deletar(Guid Id);
        List<Instituicao> Listar();
        Instituicao BuscarPorId(Guid Id);
        void Atualizar(Guid Id, Instituicao instituicaoRepository);
    }
}
