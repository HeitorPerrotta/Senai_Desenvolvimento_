using senai.inlock.webApi.Domains;
using senai.inlock.webApi.Interfaces;
using System.Data.SqlClient;

namespace senai.inlock.webApi.Repositories
{
    public class JogoRepository : IJogoRepository
    {
        private string StringConexao = "Data Source = NOTE11-S13; Initial Catalog = inlock_games_tarde; User Id = sa; Pwd = Senai@134";
        public void Cadastrar(JogoDomain novoJogo)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string queryInsert = "INSERT INTO Jogo(Titulo, IdEstudio, Descricao, DataLancamento, Valor) VALUES (@Titulo, @IdEstudio, @Descricao, @DataLancamento, @Valor)";

                SqlDataReader rdr;

                using (SqlCommand cmd = new SqlCommand(queryInsert, con))
                {
                    rdr = cmd.ExecuteReader();

                    cmd.Parameters.AddWithValue("@Titulo", novoJogo.Nome);
                    cmd.Parameters.AddWithValue("@IdEstudio", novoJogo.IdEstudio);
                    cmd.Parameters.AddWithValue("@Descricao", novoJogo.Descricao);
                    cmd.Parameters.AddWithValue("@DataLancamento", novoJogo.DataLancamento);
                    cmd.Parameters.AddWithValue("@Valor", novoJogo.Valor);

                    con.Open();

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Deletar(int id)
        {
                using (SqlConnection con = new SqlConnection(StringConexao))
                {
                    string queryInsert = $"DELETE FROM Jogo WHERE Jogo.IdJogo LIKE {id}";

                    using (SqlCommand cmd = new SqlCommand(queryInsert, con))
                    {
                        con.Open();

                        cmd.ExecuteNonQuery();
                    }
                }
        }

        public List<JogoDomain> ListarTodos()
        {
            List<JogoDomain> ListaJogo = new List<JogoDomain>();

            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string QuerySelectAll = "SELECT Jogo.IdJogo,Jogo.IdEstudio,Jogo.Nome,Jogo.Descricao,Jogo.DataLancamento,Jogo.Valor,Estudio.Nome AS nomeEstudio FROM Jogo INNER JOIN Estudio ON Jogo.IdEstudio = Estudio.IdEstudio";

                con.Open();

                SqlDataReader rdr;

                using (SqlCommand cmd = new SqlCommand(QuerySelectAll, con))
                {
                    rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        JogoDomain jogo = new JogoDomain()
                        {
                            IdJogo = Convert.ToInt32(rdr["IdJogo"]),
                            IdEstudio = Convert.ToInt32(rdr["IdEstudio"]),
                            Nome = rdr["Nome"].ToString(),
                            Descricao = rdr["Descricao"].ToString(),
                            DataLancamento = Convert.ToDateTime(rdr["DataLancamento"]),
                            Valor = Convert.ToDecimal(rdr["Valor"]),

                            Estudio = new EstudioDomain()
                            {
                                IdEstudio = Convert.ToInt32(rdr["IdEstudio"]),
                                Nome = rdr["Nome"].ToString()
                            }
                        };

                        ListaJogo.Add(jogo);                                                                
                    }
                }
                return ListaJogo;
            }
        }
    }
}
