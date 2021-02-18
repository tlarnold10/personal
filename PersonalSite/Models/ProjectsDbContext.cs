using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PersonalSite.Models
{
    public class ProjectsDbContext : DbContext
    {
        public ProjectsDbContext (DbContextOptions<ProjectsDbContext> options)
            : base(options) {} 

        public DbSet<Project> Projects { get; set; }
    }
}