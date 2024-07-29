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

        public OrderController(MongoDbService mongoDbService)
        {
            _order = mongoDbService.GetDatabase.GetCollection<Order>("order");
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
        public async Task<ActionResult> Post(Order o)
        {
            try
            {
                Order newOrder = new Order()
                {
                    Id = o.Id,
                    Date = o.Date,
                    Status = o.Status,
                };

                await _order.InsertOneAsync(newOrder);
                return Ok(newOrder);
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
                await _order.DeleteOneAsync(o => o.Id == id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(string id, Order order)
        {

            try
            {
                var filter = Builders<Order>.Filter.Eq(o => o.Id, id);
                var res = await _order.Find(filter).ToListAsync();

                if (order.Id == null)
                {
                    order.Id = res.First().Id;
                }

                if (order.Date == null)
                {
                    order.Date = res.First().Date;
                }

                if (order.Status == null)
                {
                    order.Status = res.First().Status;
                }

                if (order.clientId == null)
                {
                    order.clientId = res.First().clientId;
                }

                if (order.productId == null)
                {
                    order.productId = res.First().productId;
                }


                var update = Builders<Order>.Update
                    .Set(o => o.Id, order.Id)
                    .Set(o => o.Date, order.Date)
                    .Set(o => o.Status, order.Status)
                    .Set(o => o.clientId, order.clientId)
                    .Set(o => o.productId, order.productId)
                    ;

                await _order.UpdateOneAsync(filter, update);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
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
