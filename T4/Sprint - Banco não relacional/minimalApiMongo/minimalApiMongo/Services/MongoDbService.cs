using MongoDB.Driver;

namespace minimalApiMongo.Services
{
    public class MongoDbService
    {
        /// <summary>
        /// Armazenar a configuração da aplicação
        /// </summary>
        private readonly IConfiguration _configuration;

        /// <summary>
        /// Armazenar a referência ao MongoDb
        /// </summary>
        private readonly IMongoDatabase _database;

        /// <summary>
        /// Contém a configuração necessária paa acesso ao MongoDb
        /// </summary>
        /// <param name="configuration">Objeto com a config da aplicação</param>
        public MongoDbService(IConfiguration configuration)
        {
            //Atriubui a config recebida em _configuration
            _configuration = configuration;

            //Acessa a String de conexão
            var connectionString = _configuration.GetConnectionString("DbConnection");

            //Transforma a string obtida em MongoUrl
            var mongoUrl = MongoUrl.Create(connectionString);

            //Cria um client
            var mongoClient = new MongoClient(mongoUrl);

            //Obtém a referência ao MongoDb
            _database = mongoClient.GetDatabase(mongoUrl.DatabaseName);
        }

        /// <summary>
        /// Propriedade para acessar o bd => retorna os dados em _database
        /// </summary>
        public IMongoDatabase GetDatabase => _database;

    }
}
