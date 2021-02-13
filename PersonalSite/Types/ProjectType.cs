using GraphQL;
using GraphQL.Types;

namespace PersonalSite.Models
{
    public class AuthorType : ObjectGraphType<Project>
    {
        public AuthorType()
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