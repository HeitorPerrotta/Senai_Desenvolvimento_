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

    public class UserController : ControllerBase
    {
        private readonly IMongoCollection<User> _user;

        public UserController(MongoDbService mongoDbService)
        {
            _user = mongoDbService.GetDatabase.GetCollection<User>("user");
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            try
            {
                var users = await _user.Find(FilterDefinition<User>.Empty).ToListAsync();
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(User u)
        {
            try
            {
                User newUser = new User()
                {
                    Name = u.Name,
                    Email = u.Email,
                    Password = u.Password,
                    AdditionalAtrributes = u.AdditionalAtrributes,
                };

                await _user.InsertOneAsync(newUser);
                return Ok(newUser);
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
                await _user.DeleteOneAsync(u => u.Id == id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(string id, User user)
        {

            try
            {
                var filter = Builders<User>.Filter.Eq(u => u.Id, id);
                var res = await _user.Find(filter).ToListAsync();

                if (user.Name == null)
                {
                    user.Name = res.First().Name;
                }

                if (user.Email == null)
                {
                    user.Email = res.First().Email;
                }

                if (user.Password == null)
                {
                    user.Password = res.First().Password;
                }

                if (user.AdditionalAtrributes == null)
                {
                    user.AdditionalAtrributes = res.First().AdditionalAtrributes;
                }

                var update = Builders<User>.Update
                    .Set(u => u.Name, user.Name)
                    .Set(u => u.Email, user.Email)
                    .Set(u => u.Password, user.Password)
                    .Set(u => u.AdditionalAtrributes, user.AdditionalAtrributes);

                await _user.UpdateOneAsync(filter, update);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(string id)
        {
            try
            {
                var filter = Builders<User>.Filter.Eq(u => u.Id, id);
                var result = _user.Find(filter);

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
