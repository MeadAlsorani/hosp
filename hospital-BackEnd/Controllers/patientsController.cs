using hospital_BackEnd.Data;
using hospital_BackEnd.Filter;
using hospital_BackEnd.Helpers;
using hospital_BackEnd.Models;
using hospital_BackEnd.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class patientsController : ControllerBase
    {
        private readonly hospitalDbContext _context;
        private readonly IUriService _uriService;
        public patientsController(hospitalDbContext context, IUriService uriService)
        {
            _context = context;
            _uriService = uriService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<patient>>> GetPatients([FromQuery]paginationFilter filter, string? Name, int? fileNo, string? phoneNo)
        {
            var route = Request.Path.Value;
            var pageFilter = new paginationFilter(filter.pageNumber, filter.pageSize);
            IQueryable<patient> query = _context.patients;
            if (!string.IsNullOrEmpty(Name))
            {
                query = _context.patients.Where(x => x.name == Name);
            }
            if (!string.IsNullOrEmpty(phoneNo))
            {
                query = _context.patients.Where(x => x.phoneNumber == phoneNo);
            }
            if (fileNo != null)
            {
                query = _context.patients.Where(x => x.fileNo == fileNo);
            }
            var patients = await query
                .Skip((pageFilter.pageNumber - 1) * pageFilter.pageSize)
                .Take(pageFilter.pageSize)
                .ToListAsync();
            var totalRecords = await _context.patients.CountAsync();
            var pageResponse = paginationHelper.CreatePagedReponse<patient>(patients, pageFilter, totalRecords, _uriService, route);
            return Ok(pageResponse);
        }

        [HttpGet("{id}")]
        public IActionResult getPatientById(Guid id)
        {
            var patient = _context.patients.FirstOrDefault(x => x.id == id);
            return Ok(patient);
        }

        [HttpPost]
        public async Task<ActionResult<patient>> AddPatient(patient patient)
        {
            patient.recordCreationDate = DateTime.Now.Date;
            if (ModelState.IsValid)
            {
                 _context.patients.Add(patient);
                await _context.SaveChangesAsync();
                return Ok(patient.id);
            }
            else
            {                
                return BadRequest(ModelState.Values);
            }
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<patient>> DeletePatient(int id)
        {
            var patient = _context.patients.Find(id);
            if (patient==null)
            {
                return NotFound();
            }

            _context.patients.Remove(patient);
            await _context.SaveChangesAsync();
            return patient;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<patient>> UpdatePatient(patient patient,Guid id)
        {
            if (id!=patient.id)
            {
                return BadRequest();
            }
            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                if (!patientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult deletePatient(int id)
        {
            var patient = _context.patients.Find(id);
            _context.Remove(patient);
            _context.SaveChanges();
            return Ok(patient);
        }
        private bool patientExists(Guid id)
        {
            return _context.patients.Any(e => e.id == id);
        }
    }
}