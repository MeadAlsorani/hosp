using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_BackEnd.Models
{
    public class patient
    {
        [Key]
        public Guid id { get; set; }

        [MaxLength(50)]
        [Required]
        public string name { get; set; }
        
        [Required]
        public int fileNo { get; set; }

        [MaxLength(20)]
        [Required]
        public string citizenId { get; set; }

        [Required]
        public DateTime birthDate { get; set; }

        [Required]
        public bool gender { get; set; }

        [Required]
        public string nationality { get; set; }

        [Required]
        public string phoneNumber { get; set; }

        public string email { get; set; }

        [Required]
        public string country { get; set; }

        [Required]
        public string city { get; set; }

        [Required]
        public string street { get; set; }

        [Required]
        public string address1 { get; set; }

        public string address2 { get; set; }

        [Required]
        public string contactPerson { get; set; }

        [Required]
        public string contactRelation { get; set; }

        [Required]
        public string contactPhone { get; set; }

        [Required]
        public DateTime firstVisitDate { get; set; }

        [Required]
        public DateTime recordCreationDate { get; set; }

    }
}
