using senai.inlock.webApi.Domains;
using senai.inlock.webApi.Interfaces;
using System.Data.SqlClient;

namespace senai.inlock.webApi.Repositories
{
        public class EstudioRepository : IEstudioRepository
        {
            private string StringConexao = "Data Source = NOTE11-S13; Initial Catalog = inlock_games_tarde; User Id = sa; Pwd = Senai@134";
            public void Cadastrar(JogoDomain novoJogo)
            {
                using (SqlConnection con = new SqlConnection(StringConexao))
                {
                    string queryInsert = "INSERT INTO Jogo(Titulo, IdEstudio) VALUES (@Titulo, @IdEstudio)";

                    using (SqlCommand cmd = new SqlCommand(queryInsert, con))
                    {

                        cmd.Parameters.AddWithValue("@Titulo", novoJogo.Nome);
                        cmd.Parameters.AddWithValue("@IdEstudio", novoJogo.IdEstudio);

                        con.Open();

                        cmd.ExecuteNonQuery();
                    }
                }
            }

            public void Cadastrar(EstudioDomain NovoEstudio)
            {
                throw new NotImplementedException();
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

            List<EstudioDomain> IEstudioRepository.ListarTodos()
            {
                List<EstudioDomain> ListaEstudio = new List<EstudioDomain>();

                using (SqlConnection con = new SqlConnection(StringConexao))
                {
                    string QuerySelectAll = "SELECT Estudio.IdEstudio,Jogo.IdEstudio,Jogo.Titulo,Estudio.Nome FROM Jogo INNER JOIN Estudio ON Jogo.IdEstudio = Estudio.IdEstudio";

                    con.Open();

                    SqlDataReader rdr;

                    using (SqlCommand cmd = new SqlCommand(QuerySelectAll, con))
                    {
                        rdr = cmd.ExecuteReader();

                        while (rdr.Read())
                        {
                            EstudioDomain estudio = new EstudioDomain()
                            {
                                IdEstudio = Convert.ToInt32(rdr["IdEstudio"]),
                                Nome = rdr["Nome"].ToString(),

                            };
                        }
                    }
                    return ListaEstudio;
                }
            }
        }
}

