using GraphQL.AspNet.Controllers;
using GraphQL.AspNet.Attributes;

namespace PersonalSite
{
    public class ProjectsController : GraphController
    {
        [QueryRoot("project")]
        public Project Project(int id)
        {
            return new Project()
            {
                Id = id,
                ProjectName = "Goal Tracker",
                Description = "Keeps track of my goals",
                TechStack = "Python, Django, React, GraphQl",
                YearBuilt = 2020,
                GitHubLink = "https://github.com/tlarnold10/goals",
            };
        }
    }
}