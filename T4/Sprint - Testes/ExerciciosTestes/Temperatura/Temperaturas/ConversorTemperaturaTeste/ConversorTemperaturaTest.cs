using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Temperaturas;

namespace ConversorTemperaturaTeste
{
    public class ConversorTemperaturaTest
    {
        [Fact]  
        public void TestarConversaoCelsiusParaFahrenheit()
        {
            double celsius = 0;
            double esperado = 32;

            double resultado = ConversorTemperatura.ConverterCelsiusParaFahrenheit(celsius);

            Assert.Equal(esperado, resultado, 0.0001);
        }
    }
}
