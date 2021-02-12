using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_BackEnd.Filter
{
    public class paginationFilter
    {
        public int pageNumber { get; set; }
        public int pageSize { get; set; }

        public paginationFilter()
        {
            this.pageNumber = 1;
            this.pageSize = 10;
        }

        public paginationFilter(int pageNumber,int pageSize)
        {
            this.pageNumber = pageNumber < 1 ? 1 : pageNumber;
            this.pageSize = pageSize > 10 ? 10 : pageSize;
        }
    }
}
