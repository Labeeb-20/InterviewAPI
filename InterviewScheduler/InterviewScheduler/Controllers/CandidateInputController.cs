﻿using InterviewScheduler.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InterviewScheduler.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateInputController : ControllerBase
    {
        private readonly IInterviewDataAccess dal;
        public CandidateInputController(IInterviewDataAccess dal)
        {
            this.dal = dal;
        }
        [HttpPost]
        [Route("AddCandidate")]
        public IActionResult AddCandidate([FromForm] Candidates candidate)
        {
            try
            {
                var new_candidate = new Candidates
                {
                    candidatename = candidate.candidatename,
                    emailid = candidate.emailid,
                    phone = candidate.phone,
                };
                if (candidate.resumefile != null)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        candidate.resumefile.CopyTo(memoryStream);
                        new_candidate.resume = memoryStream.ToArray();
                    }
                }
                int id = dal.AddCandidates(new_candidate);
                return Ok(id);
            }
            catch (Exception ex)
            {   
                return BadRequest(ex.Message);
            }
        }
    }
}
