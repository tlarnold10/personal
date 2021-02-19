using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using System.Web.Mvc;

namespace PersonalSite.GraphQL
{
    public class ProjectsSchema : Schema
    {
        public ProjectsSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<ProjectQuery>();
        }
    }
}