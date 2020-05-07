using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class FenceController : ControllerBase
    {
        private ApplicationDbContext _context;

        public FenceController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Fence> Get()
        {
            Fence[] fence = null;

            fence = _context.Fence.ToArray();

            return fence;

        }
        [HttpPost]
        public Fence Post([FromBody]Fence fence)
        {
            _context.Fence.Add(fence);
            _context.SaveChanges();
            return fence;
        }
    }
}
