using hospital_BackEnd.Filter;
using Microsoft.AspNetCore.WebUtilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_BackEnd.Services
{
    public class UriService:IUriService
    {
        private readonly string _baseUri;
        public UriService(string baseUri)
        {
            _baseUri = baseUri;
        }

        public Uri GetPageUri(paginationFilter filter,string route)
        {
            var _endPointUri = new Uri(string.Concat(_baseUri, route));
            var modifiedUri = QueryHelpers.AddQueryString(_endPointUri.ToString(), "pageNumber", filter.pageNumber.ToString());
            modifiedUri = QueryHelpers.AddQueryString(modifiedUri, "pageSize", filter.pageSize.ToString());
            return new Uri(modifiedUri);
        }
    }
}
