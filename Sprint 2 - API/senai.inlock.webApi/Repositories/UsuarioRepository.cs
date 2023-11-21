using senai.inlock.webApi.Domains;
using senai.inlock.webApi.Interfaces;
using System.Data.SqlClient;

namespace senai.inlock.webApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private string StringConexao = "Data Source = NOTE11-S13; Initial Catalog = inlock_games_tarde; User Id = sa; Pwd = Senai@134";

        public UsuarioDomain Login(string email, string senha)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string queryLogin = "SELECT IdUsuario,Email,IdTipoUsuario FROM Usuario WHERE Email = @Email AND Senha = @Senha";

                con.Open();


                using (SqlCommand cmd = new SqlCommand(queryLogin, con))
                {
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Senha", senha);

                    SqlDataReader rdr = cmd.ExecuteReader();

                    if (rdr.Read())
                    {
                        UsuarioDomain usuario = new UsuarioDomain()
                        {
                            IdUsuario = Convert.ToInt32(rdr["IdUsuario"]),
                            Email = rdr["Email"].ToString(),
                            IdTipoDeUsuario = Convert.ToInt32(rdr["IdTipoUsuario"])
                        };
                        return usuario;
                    }
                }
                return null;
            }

        }
    }
}
