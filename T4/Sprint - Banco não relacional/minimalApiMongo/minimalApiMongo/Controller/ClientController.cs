using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using minimalApiMongo.Domains;
using minimalApiMongo.Services;
using MongoDB.Driver;

namespace minimalApiMongo.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class ClientController : ControllerBase
    {
        private readonly IMongoCollection<Client> _client;

        public ClientController(MongoDbService mongoDbService)
        {
            _client = mongoDbService.GetDatabase.GetCollection<Client>("client");
        }

        [HttpGet]
        public async Task<ActionResult<List<Client>>> Get()
        {
            try
            {
                var clients = await _client.Find(FilterDefinition<Client>.Empty).ToListAsync();
                return Ok(clients);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Client c)
        {
            try
            {
                Client newClient = new Client()
                {
                    UserId = c.UserId,
                    Cpf = c.Cpf,
                    Phone = c.Phone,
                    Address = c.Address,
                    AdditionalAtrributes = c.AdditionalAtrributes,
                };

                await _client.InsertOneAsync(newClient);
                return Ok(newClient);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            try
            {
                await _client.DeleteOneAsync(c => c.Id == id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(string id, Client client)
        {

            try
            {
                var filter = Builders<Client>.Filter.Eq(c => c.Id, id);
                var res = await _client.Find(filter).ToListAsync();

                if (client.UserId == null)
                {
                    client.UserId = res.First().UserId;
                }

                if (client.Cpf == null)
                {
                    client.Cpf = res.First().Cpf;
                }

                if (client.Phone == null)
                {
                    client.Phone = res.First().Phone;
                }

                if (client.Address == null)
                {
                    client.Address = res.First().Address;
                }

                if (client.AdditionalAtrributes == null)
                {
                    client.AdditionalAtrributes = res.First().AdditionalAtrributes;
                }

                var update = Builders<Client>.Update
                    .Set(c => c.UserId, client.UserId)
                    .Set(c => c.Cpf, client.Cpf)
                    .Set(c => c.Phone, client.Phone)
                    .Set(c => c.Address, client.Address)
                    .Set(c => c.AdditionalAtrributes, client.AdditionalAtrributes);

                await _client.UpdateOneAsync(filter, update);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetById(string id)
        {
            try
            {
                var filter = Builders<Client>.Filter.Eq(c => c.Id, id);
                var result = _client.Find(filter);

                //return _user is not null ? Ok(_user) : NotFound();

                return Ok(result.First());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
