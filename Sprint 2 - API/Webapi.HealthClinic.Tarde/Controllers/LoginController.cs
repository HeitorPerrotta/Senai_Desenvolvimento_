using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;
using Webapi.HealthClinic.Tarde.Repositories;

namespace Webapi.HealthClinic.Tarde.LoginViewModel
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private readonly IUsuario _usuarioRepository;

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }
        [HttpPost]
        public IActionResult Login(LoginViewModel usuario)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorEmailESenha(usuario.Email!, usuario.Senha!);

                if (usuarioBuscado == null)
                {
                    return StatusCode(401, "Email ou Senha Inválidos!");
                }
                var claims = new[]
                   {
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email!),
                    new Claim(JwtRegisteredClaimNames.Name, usuarioBuscado.Nome!),
                    new Claim(ClaimTypes.Role, usuarioBuscado.TipoUsuario!.Titulo!)
                };
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projeto-health_clinic-webapi-chave-autenticacao-dev"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken
                (
                    issuer: "WebApi.HealthClinic.Tarde",

                    audience: "WebApi.HealthClinic.Tarde",

                    claims: claims,

                    expires: DateTime.Now.AddMinutes(5),

                    signingCredentials: creds
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
