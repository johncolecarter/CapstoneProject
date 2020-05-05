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

        [HttpGet]
        public IEnumerable<Fence> Get()
        {
            Fence[] fence = null;
            using (var context = new ApplicationDbContext())
            {
                fence = context.Fence.ToArray();
            }
            return fence;

        }
        [HttpPost]
        public Fence Post([FromBody]Fence fence)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Fence.Add(fence);
                context.SaveChanges();
            }
            return fence;
        }
    }
}
