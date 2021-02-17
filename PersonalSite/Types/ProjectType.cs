using GraphQL;
using GraphQL.Types;
using PersonalSite.Models;

namespace PersonalSite.Types
{
    public class ProjectType : ObjectGraphType<Project>
    {
        public ProjectType()
        {
            Field(x => x.Id);
            Field(x => x.ProjectName);
            Field(x => x.Description);
            Field(x => x.TechStack);
            Field(x => x.YearBuilt);
            Field(x => x.GitHubLink);
        }
    }
}