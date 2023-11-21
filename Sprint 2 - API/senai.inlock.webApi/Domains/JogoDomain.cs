using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domains
{
    public class JogoDomain
    {
        public int IdJogo { get; set; }
        [Required(ErrorMessage = "O nome do Jogo é obrigatótio!")]

        public int IdEstudio { get; set; }

        public string? Nome { get; set; }    

        public string? Descricao { get; set; }

        public DateTime DataLancamento { get; set; }

        public Decimal Valor { get; set; }

        //pra chamar a EstudioDomain
        public EstudioDomain? Estudio { get; set; }
    }
}
