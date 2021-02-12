using hospital_BackEnd.Filter;
using hospital_BackEnd.Services;
using hospital_BackEnd.Wrappers;
using System;
using System.Collections.Generic;

namespace hospital_BackEnd.Helpers
{
    public class paginationHelper
    {
        public static PagedResponse<List<T>> CreatePagedReponse<T>(List<T> pagedData, paginationFilter validFilter, int totalRecords, IUriService uriService, string route)
        {
            var respose = new PagedResponse<List<T>>(pagedData, validFilter.pageNumber, validFilter.pageSize);
            var totalPages = (double)totalRecords / (double)validFilter.pageSize;
            int roundedTotalPages = Convert.ToInt32(Math.Ceiling(totalPages));
            respose.NextPage =
                validFilter.pageNumber >= 1 && validFilter.pageNumber < roundedTotalPages
                ? uriService.GetPageUri(new paginationFilter(validFilter.pageNumber + 1, validFilter.pageSize), route)
                : null;
            respose.PreviousPage =
                validFilter.pageNumber - 1 >= 1 && validFilter.pageNumber <= roundedTotalPages
                ? uriService.GetPageUri(new paginationFilter(validFilter.pageNumber - 1, validFilter.pageSize), route)
                : null;
            respose.FirstPage = uriService.GetPageUri(new paginationFilter(1, validFilter.pageSize), route);
            respose.LastPage = uriService.GetPageUri(new paginationFilter(roundedTotalPages, validFilter.pageSize), route);
            respose.TotalPages = roundedTotalPages;
            respose.TotalRecords = totalRecords;
            return respose;
        }
    }

    

}
