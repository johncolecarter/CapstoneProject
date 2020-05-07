using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Fence
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        public string Address { get; set; }

        public DateTime Date { get; set; }

        public string Builder { get; set; }

        public string HomeOwner { get; set; }

        public double FeetOfFence { get; set; }

        public int HeightOfFence { get; set; }

        public string TypeOfFence { get; set; }

        public int Gates { get; set; }

        public bool Curb { get; set; }

        public bool Stain { get; set; }

        public string BOrC { get; set; }

        public double Price { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
