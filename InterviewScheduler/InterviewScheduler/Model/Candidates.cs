using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InterviewScheduler.Model
{
    [Table("candidates")]
    public class Candidates
    {
        [Key]
        [Column("candidateid")]
        public int candidateid { get; set; }
        [Column("candidatename")]
        public string candidatename { get; set; }
        [Column("emailid")]
        public string emailid { get; set; }
        [Column("phone")]
        public string phone {  get; set; }
        [Column("resume")]
        public byte[]? resume { get; set; }
        [NotMapped]
        public IFormFile resumefile { get; set; }

       // public int RecruiterId
        //public Recruiter Recruiter { get; set; }

    }
}
