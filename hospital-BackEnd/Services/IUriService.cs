using hospital_BackEnd.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_BackEnd.Services
{
    public interface IUriService
    {
        public Uri GetPageUri(paginationFilter filter, string route);
    }
}
