﻿using System;
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
    public class TeacherController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Teacher> Get()
        {
            Teacher[] teacher = null;
            using (var context = new ApplicationDbContext())
            {
                teacher = context.Teachers.ToArray();
            }
            return teacher;

        }
        [HttpPost]
        public Teacher Post([FromBody]Teacher teacher)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Teachers.Add(teacher);
                context.SaveChanges();
            }
            return teacher;
        }
    }
}
