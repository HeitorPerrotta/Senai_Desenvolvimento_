using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Email
{
    public class Emails
    {
            public bool EmailValidate(string email)
            {
                return email.Contains("@") && email.Contains(".");
            }
    }
}
