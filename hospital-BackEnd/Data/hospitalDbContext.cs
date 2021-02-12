using hospital_BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_BackEnd.Data
{
    public class hospitalDbContext:DbContext
    {
        public hospitalDbContext(DbContextOptions<hospitalDbContext> options):base(options)
        {

        }

        public DbSet<patient> patients { get; set; }
    }
}
