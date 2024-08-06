using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Livros
{
    public class Livro
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public string? Titulo { get; set; }

        public string? Autor { get; set; }

        public DateTime DataLancamento { get; set; }

        public static void AdicionarLivro(Livro livro, List<Livro> livros)
        {
            livros.Add(livro);
        }
    }
}
