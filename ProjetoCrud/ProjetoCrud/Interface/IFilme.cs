using ProjetoCrud.Domains;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoCrud.Interface
{
    public interface IFilme
    {
        void Cadastrar(Filme novoFilme);

        void Deletar(Guid id);

        List<Filme> ListarTodos();

        void Update(Guid Id, Filme atualizarFilme);
    }
}
