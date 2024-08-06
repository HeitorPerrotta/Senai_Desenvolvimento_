using Moq;
using ProductsApiTest.Domains;
using ProductsApiTest.Interfaces;
using ProductsApiTest.Migrations;
using ProductsApiTest.Repositories;

namespace ProductApiTest.test
{
    public class ProductsTest
    {
        /// <summary>
        /// Teste para a funcionalidade listar todos os produtos
        /// </summary>
        [Fact]
        public void Get()
        {
            //AAA = 3 As

            //ARRANGE

            //Lista de objetos
            List<Products> productList = new List<Products>
            {
                new Products  { IdProduct = Guid.NewGuid(), Nome="Produto 1", Price=78 },
                new Products { IdProduct = Guid.NewGuid(), Nome = "Produto 1", Price = 78 },
                new Products  { IdProduct = Guid.NewGuid(), Nome = "Produto 1", Price = 78 }

            };

            //Cria um objeto de simulação do tipo IProductRepository
            var mockRepository = new Mock<IProductsRepository>();

            //Configura o método "Get" para que quando for acionado retorne a lista mockada.
            mockRepository.Setup(x => x.Get()).Returns(productList);


            //ACT

            //Executando o método "Get" e atribue a resposta em result
            var result = mockRepository.Object.Get();


            //ASSERT

            Assert.Equal(3, result.Count());

        }

        [Fact]
        public void Post()
        {
            Products products = new Products { IdProduct = Guid.NewGuid(), Nome = "Rolex", Price = 899 };

            List<Products> productList = new List<Products>();

            var mockRepository = new Mock<IProductsRepository>();

            mockRepository.Setup(x => x.Post(products)).Callback<Products>(x => productList.Add(products));

            mockRepository.Object.Post(products);

            Assert.Contains(products, productList);
        }

        [Theory]
        [InlineData("fa7965dc-8c25-4ca3-99a1-82df0695a5ab")]
        public void Delete(Guid idProduto)
        {
            List<Products> productList = new List<Products>()
            {
                new Products() {IdProduct = Guid.Parse("fa7965dc-8c25-4ca3-99a1-82df0695a5ab"), Nome = "Calça Jeans", Price = 99 }
            };

            Products products = productList.FirstOrDefault(p => p.IdProduct == idProduto)!;

            var mockRepository = new Mock<IProductsRepository>();

            mockRepository.Setup(x => x.Delete(idProduto)).Callback(() => productList.Remove(products));

            mockRepository.Object.Delete(idProduto);

            Assert.Empty(productList);
        }

        [Fact]
        public void GetById()
        {

            List<Products> productList = new List<Products>();


            Products product = new Products
            {
                IdProduct = Guid.NewGuid(),
                Nome = "Cabeça do Lima",
                Price = 100
            };

            productList.Add(product);


            var produtoBuscado = productList.FirstOrDefault(x => x.IdProduct == product.IdProduct);


            var mockRepository = new Mock<IProductsRepository>();

            mockRepository.Setup(x => x.GetById(product.IdProduct)).Returns(produtoBuscado);

            mockRepository.Object.GetById(product.IdProduct);

            Assert.Equal(1, productList.Count);
        }

        [Fact]
        public void Put()
        {

            List<Products> productList = new List<Products>();


            Products product = new Products
            {
                IdProduct = Guid.NewGuid(),
                Nome = "Óculos da Catarina",
                Price = 32
            };

            productList.Add(product);


            var mockRepository = new Mock<IProductsRepository>();


            mockRepository.Setup(x => x.Put(product.IdProduct, product)).Callback<Guid, Products>((id, p) =>
            {
                var item = productList.FirstOrDefault(x => x.IdProduct == id);

                if (item != null)
                {
                    p.Nome = "Óculos do Matheus Lima";
                    p.Price = 35;
                    productList.Add(product);
                }
            });

            mockRepository.Object.Put(product.IdProduct, product);

            Assert.Equal("Óculos do Matheus Lima", product.Nome);
        }
    }

}