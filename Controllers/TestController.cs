// Controllers/TestController.cs
using Microsoft.AspNetCore.Mvc;
using AngularApp.Models; 

namespace AngularApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly DataContext _context;

        public TestController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("SaveUser")]
        public IActionResult SaveUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User data is null.");
            }

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok("User saved successfully.");
        }
    }
}
