using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControleDeIventario
{
    public class Produto
    {
        public string? Nome { get; set; }

        public int Quantidade { get; set; }

        public void AdicionarProduto(string nome, List<Produto> lista)
        {
            var produto = lista.FirstOrDefault(p => p.Nome == nome);
            if (produto != null)
            {
                produto.Quantidade += 1;
            }
            else
            {
                lista.Add(new Produto { Nome = nome, Quantidade = 1 });
            }
        }

        public int ObterQuantidade(string nome, List<Produto> lista)
        {
            var produto = lista.FirstOrDefault(p => p.Nome == nome);
            return produto?.Quantidade ?? 0;
        }
    }
}
