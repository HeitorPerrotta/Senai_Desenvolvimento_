using ProjetoCrud.Context;
using ProjetoCrud.Domains;
using ProjetoCrud.Interface;

namespace ProjetoCrud.Repository
{
    public class FilmeRepository : IFilme
    {
        private readonly FilmesContext ctx;

        public FilmeRepository()
        {
            ctx = new FilmesContext();
        }

        public void Cadastrar(Filme novoFilme)
        {
            ctx.Filmes.Add(novoFilme);

            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            Filme FilmeBuscado = ctx.Filmes.Find(id)!;

            if (FilmeBuscado != null)
            {
                ctx.Filmes.Remove(FilmeBuscado);
            }

            ctx.SaveChanges();
        }

        public List<Filme> ListarTodos()
        {
            return ctx.Filmes.ToList();
        }

        public void Update(Guid Id, Filme atualizarFilme)
        {
            Filme FilmeBuscado = ctx.Filmes.FirstOrDefault(filme => filme.IdFilme == Id)!;

            if (FilmeBuscado != null)
            {
                if (atualizarFilme.NomeFilme != null)
                {
                    FilmeBuscado.NomeFilme = atualizarFilme.NomeFilme;
                }

                if (atualizarFilme.FilmeDescription != null)
                {
                    FilmeBuscado.FilmeDescription = atualizarFilme.FilmeDescription;
                }

                if (atualizarFilme.Gênero != null)
                {
                    FilmeBuscado.Gênero = atualizarFilme.Gênero;
                }

                if (atualizarFilme.DataLancamento != null)
                {
                    FilmeBuscado.DataLancamento = atualizarFilme.DataLancamento;
                }
            }

            ctx.Filmes.Update(FilmeBuscado!);

            ctx.SaveChanges();
        }
    }
}
