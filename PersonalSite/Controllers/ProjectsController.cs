using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GraphQL.AspNet.Controllers;
using GraphQL.AspNet.Attributes;
using PersonalSite.Models;

namespace PersonalSite.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly ProjectsDbContext _context;

        public ProjectsController(ProjectsDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Project> GetAll()
        {
            return _context.Projects;
        }
    }
}