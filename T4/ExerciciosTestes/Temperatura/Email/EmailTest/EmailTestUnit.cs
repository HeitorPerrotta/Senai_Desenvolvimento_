using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Email.Test
{
    public class ValidateEmail
    {
        [Theory]
        [InlineData("exemplo@dominio.com", true)]
        [InlineData("exemplo.dominio.com", false)]
        [InlineData("@dominio.com", false)]
        [InlineData("exemplo@", false)]
        [InlineData("", false)]
        public void ValidateEmailTest(string email, bool expected)
        {
            var validator = new Email();

            bool result = validator.EmailValidate(email);

            Assert.Equal(expected, result);
        }
    }
}
