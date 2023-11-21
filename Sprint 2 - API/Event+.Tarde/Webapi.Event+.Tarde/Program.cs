using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

//Adiciona servi�o de aut�ntica��o JWT Bearer
builder.Services.AddAuthentication(options =>
{
options.DefaultChallengeScheme = "JwtBearer";
options.DefaultAuthenticateScheme = "JwtBearer";
})

//Define os par�metros de valida��o do token
.AddJwtBearer("JwtBearer", options =>
{
options.TokenValidationParameters = new TokenValidationParameters
{
//Valida quem est� solicitando
ValidateIssuer = true,

//Valida quem est� recebendo
ValidateAudience = true,

//Define se o tempo de expira��o do token ser� avaliado
ValidateLifetime = true,

//Forma de criptografia e ainda valida��o da chave de autentica��o
IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projeto-event-webapi-chave-autenticacao-dev")),

//Valida o tempo de expira��o do token
ClockSkew = TimeSpan.FromMinutes(5),

//De onde est� vindo (issuer)
ValidIssuer = "WebApi.Event+.Tarde",

//Para onde est� indo (audience)
ValidAudience = "WebApi.Event+.Tarde"
};
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "API senai.inlock.webApi",
        Description = "API para gerenciamento de jogos  - introdu��o a sprint 2 - Backend API",
        Contact = new OpenApiContact
        {
            Name = "Heitor Perrotta",
            Url = new Uri("https://github.com/HeitorPerrotta")
        },
    });
    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));

    //Usando a autentica��o do Swagger
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Value: Bearer TokenJWT"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[]{}
        }
    });

});

var app = builder.Build();

//Para atender � interface do usu�rio do Swagger na raiz do aplicativo
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();

app.Run();
