
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace InterviewScheduler.Model
{
    public class InterviewDataAccess : IInterviewDataAccess
    {
        private readonly InterviewDbContext interviewDbContext;
        public InterviewDataAccess(InterviewDbContext interviewDbContext)
        {
            this.interviewDbContext = interviewDbContext;
        }

        public int AddCandidates(Candidates candidates)
        {
            interviewDbContext.Candidates.Add(candidates);
            interviewDbContext.SaveChanges();
            var record = interviewDbContext.Candidates.Find(candidates.candidateid);
            int id = record.candidateid;

            return id;
        }

        public void AddInterview(Recruiter recruiter)
        {
            interviewDbContext.Recruiters.Add(recruiter);
            interviewDbContext.SaveChanges();
        }

        public void UpdateStatus(int id, Recruiter status)
        {
            var record = interviewDbContext.Recruiters.Find(id);
            if (record != null)
            {
                record.status = status.status;
                record.recommendedDesignation = status.recommendedDesignation;
                record.Remarks = status.Remarks;
                interviewDbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Record not found");
            }
            
        }

        public List<Recruiter> GetByDate(DateOnly date)
        {
           var record =  interviewDbContext.Recruiters.Where(s => s.Date == date).ToList();
            if (record != null)
            {
                return record;
            }
            else
            {
                throw new Exception("Record not found");
            }
        }

        public List<Candidates> GetByEmailid(string email)
        {
            var record = interviewDbContext.Candidates.Where(s => s.emailid == email).ToList();
            if (record != null)
            {
                return record;
            }
            else
            {
                throw new Exception("Record not found");
            }

        }

        public List<Recruiter> GetByInterviewName(string interviewName)
        {
            var record = interviewDbContext.Recruiters.Where(s => s.Name == interviewName).ToList();
            if (record != null)
            {
                return record;
            }
            else
            {
                throw new Exception("Record not found");
            }
        }

        public List<Candidates> GetByName(string name)
        {
            var record = interviewDbContext.Candidates.Where(s => s.candidatename == name).ToList();
            if (record != null)
            {
                return record;
            }
            else
            {
                throw new Exception("Record not found");
            }
        }

        public List<Candidates> GetByPhone(string phone)
        {
            var record = interviewDbContext.Candidates.Where(s => s.phone == phone).ToList();
            if (record != null)
            {
                return record;
            }
            else
            {
                throw new Exception("Record not found");
            }
        }

        public List<Recruiter> GetByRounds(int rounds)
        {
            var record = interviewDbContext.Recruiters.Where(s => s.Rounds == rounds).ToList();
            if (record != null)
            {
                return record;
            }
            else
            {
                throw new Exception("Record not found");
            }
        }

        public void UpdateOfferLetterStatus(string name, string offer)
        {
            var cid = interviewDbContext.Candidates
                        .Where(e => e.candidatename == name)
                        .Select(e => e.candidateid).FirstOrDefault();


            var record = interviewDbContext.Recruiters.Where(e => e.CandidateId == cid && e.status == "selected").
                SingleOrDefault();

            if (record != null)
            {   
               record.offerLetterStatus = offer;
                interviewDbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Name Not found");
            }
        }
    }
}
