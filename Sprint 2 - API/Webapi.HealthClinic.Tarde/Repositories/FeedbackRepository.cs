using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class FeedbackRepository : IFeedback
    {
        private readonly HealthContext ctx;

        public FeedbackRepository()
        {
            ctx = new HealthContext();
        }

        public void Cadastrar(Feedback feedback)
        {
            ctx.Feedback.Add(feedback);
            ctx.SaveChanges();
        }

        public void Deletar(Guid Id)
        {
            Feedback CFind = ctx.Feedback.Find(Id)!;

            if (CFind != null)
            {
                ctx.Feedback.Remove(CFind);
            }

            ctx.SaveChanges();
        }
    }
}