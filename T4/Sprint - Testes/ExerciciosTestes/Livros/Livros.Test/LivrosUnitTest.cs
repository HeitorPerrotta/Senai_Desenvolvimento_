using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Livros;

namespace Livros.Test
{
    public class LivrosUnitTest
    {
        [Fact]
        public void AdicionarLivroTest()
        {
            Livro livro = new Livro()
            {
                Autor = "J.R.R. Tolkien",
                Titulo = "O Senhor dos Pastéis: O Retorno de Ganjalf",
                DataLancamento = new DateTime(1954, 7, 29)
            };

            List<Livro> livros = new List<Livro>();

            Livro.AdicionarLivro(livro, livros);

            Assert.True(livros.Contains(livro));

            //Assert.Equal("O Senhor dos Pastéis: O Retorno de Ganjalf", livroAdicionado.Titulo);
            //Assert.Equal("J.R.R. Tolkien", livroAdicionado.Autor);
            //Assert.Equal(new DateTime(1954, 7, 29), livroAdicionado.DataLancamento);
        }
    }
}
