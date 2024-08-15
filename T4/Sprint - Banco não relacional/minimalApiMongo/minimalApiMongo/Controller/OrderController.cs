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

    public class OrderController : ControllerBase
    {
        private readonly IMongoCollection<Order> _order;
        private readonly IMongoCollection<Client> _client;
        private readonly IMongoCollection<Product> _product;

        public OrderController(MongoDbService mongoDbService)
        {
            _order = mongoDbService.GetDatabase.GetCollection<Order>("order");
            _client = mongoDbService.GetDatabase.GetCollection<Client>("client");
            _product = mongoDbService.GetDatabase.GetCollection<Product>("product");
        }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {
            try
            {
                var orders = await _order.Find(FilterDefinition<Order>.Empty).ToListAsync();
                return Ok(orders);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(OrderViewModel oV)
        {
            try
            {
                Order order = new Order();

                    order.Id = oV.Id;
                    order.Date = oV.Date;
                    order.Status = oV.Status;
                    order.ProductId = oV.ProductId;
                    order.ClientId = oV.ClientId;

                var client = await _client.Find(c =>  c.Id == order.ClientId).FirstOrDefaultAsync();

                if (client == null)
                {
                    return NotFound("Não encontrado");
                }

                List<Product> lista = new List<Product>();

                foreach (var productId in order.ProductId!)
                {
                    var product = await _product.Find(p => p.Id == productId).FirstOrDefaultAsync();
                    if (product != null)
                    {
                        lista.Add(product);
                    }
                }

                order.Products = lista;

                order.Client = client;
    
                await _order.InsertOneAsync(order);

                return StatusCode(201, order);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            try
            {
                await _order.DeleteOneAsync(o => o.Id == id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<Order>> Put(Order o)
        {
            try
            {
                Order order = new Order();

                order.Id = o.Id;
                order.Date = o.Date;
                order.Status = o.Status;
                order.ProductId = o.ProductId;
                order.ClientId = o.ClientId;

                var client = await _client.Find(c => c.Id == order.ClientId).FirstOrDefaultAsync();

                if (client == null)
                {
                    return NotFound("Não encontrado");
                }

                List<Product> lista = new List<Product>();

                foreach (var productId in order.ProductId!)
                {
                    var product = await _product.Find(p => p.Id == productId).FirstOrDefaultAsync();
                    if (product != null)
                    {
                        lista.Add(product);
                    }
                }

                order.Products = lista;

                order.Client = client;

                await _order.ReplaceOneAsync(o => o.Id == order.Id, order);

                return StatusCode(201, order);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message); ;
            }
                
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetById(string id)
        {
            try
            {
                var filter = Builders<Order>.Filter.Eq(o => o.Id, id);
                var result = _order.Find(filter);

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
