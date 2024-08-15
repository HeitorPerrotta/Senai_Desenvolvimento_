using Email;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmailTestUnit
{
    public class EmailUnitTest
    {
        [Theory]
        [InlineData("exemplo@dominio.com", true)]
        [InlineData("exemplo.dominio.com", false)]
        [InlineData("@dominio.com", false)]
        [InlineData("exemplo@", false)]
        [InlineData("", false)]
        public void ValidateEmailTest(string email, bool expected)
        {
            var validator = new Emails();

            bool result = validator.EmailValidate(email);

            Assert.Equal(expected, result);
        }
    }
}
