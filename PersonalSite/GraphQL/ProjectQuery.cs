using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalSite.Types;
using PersonalSite.Controllers;
using PersonalSite.Models;

namespace PersonalSite.GraphQL
{
    public class ProjectQuery : ObjectGraphType
    {
        public ProjectQuery(ProjectsDbContext _context)
        {
            Field<ListGraphType<ProjectType>>(
                "projects",
                resolve: context => _context.Projects.ToList()
            );
        }
    }
}