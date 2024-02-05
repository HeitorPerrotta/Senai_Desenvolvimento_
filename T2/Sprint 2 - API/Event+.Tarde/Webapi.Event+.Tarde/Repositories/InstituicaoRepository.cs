using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;

namespace Webapi.Event_.Tarde.Repositories
{
    public class InstituicaoRepository : IInstituicaoRepository
    {

        private readonly EventContext ctx;

        public InstituicaoRepository()
        {
            ctx = new EventContext();
        }

        public Instituicao Atualizar(Guid id, Instituicao instituicaoRepository, Instituicao instituicao)
        {
            Instituicao instituicaoBuscada = ctx.Instituicao.Find(id)!;

            if (instituicaoBuscada != null)
            {
                instituicaoBuscada.CNPJ = instituicao.CNPJ;
                instituicaoBuscada.Endereco = instituicao.Endereco;
                instituicaoBuscada.NomeFantasia = instituicao.NomeFantasia;
            }

            ctx.Instituicao.Update(instituicaoBuscada!);

            ctx.SaveChanges();

            return instituicaoRepository;
        }

        public void Atualizar(Guid Id, Instituicao instituicaoRepository)
        {
            throw new NotImplementedException();
        }

        public Instituicao BuscarPorId(Guid id)
        {
            Instituicao instituicao = ctx.Instituicao.Find(id)!;

            ctx.SaveChanges();

            return instituicao;
        }

        public void Cadastrar(Instituicao instituicaoRepository)
        {
            ctx.Instituicao.Add(instituicaoRepository);

            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            Instituicao instituicaoBuscada = ctx.Instituicao.Find(id)!;

            if (instituicaoBuscada != null)
            {
                ctx.Instituicao.Remove(instituicaoBuscada);
            }

            ctx.SaveChanges();
        }

        public List<Instituicao> Listar()
        {
            return ctx.Instituicao.ToList();
        }
    }
}
