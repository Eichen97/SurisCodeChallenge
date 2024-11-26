using Microsoft.AspNetCore.Mvc;
using SurisCodeChallengeBack.Models;

namespace SurisCodeChallengeBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticlesController() : ControllerBase
    {
        public static Articulo[] Articulos =
        [
            new Articulo
            {
                Codigo = "K1020",
                Descripcion = "Colchon Telgo",
                Precio = 10256.12,
                Deposito = 1
            },
            new Articulo
            {
                Codigo = "K1022%%", 
                Descripcion = "Colchon Seally", 
                Precio = 18256.12, 
                Deposito = 4
            },
            new Articulo
            {
                Codigo = "K1024",   
                Descripcion = "Sommier Telgo", 
                Precio = 14256.12, 
                Deposito = 1
            },
            new Articulo
            {
                Codigo = "K1026",   
                Descripcion = "Sommier Seally", 
                Precio = 13256.12, 
                Deposito = 1
            },
            new Articulo
            {
                Codigo = "F1026",   
                Descripcion = "Almohada Seally", 
                Precio = 0, 
                Deposito = 1
            },
            new Articulo
            {
                Codigo = "F1026",   
                Descripcion = "Almohada Seally", 
                Precio = 3250.12, 
                Deposito = 4
            },
            new Articulo
            {
                Codigo = "K1024",   
                Descripcion = "Sommier Telgo", 
                Precio = 14256.12, 
                Deposito = 4
            },
            new Articulo
            {
                Codigo = "K1026",   
                Descripcion = "Sommier Seally", 
                Precio = -13256.12, 
                Deposito = 8
            },
            new Articulo
            {
                Codigo = "K!°1026", 
                Descripcion = "Sommier Seally", 
                Precio = -13256.12, 
                Deposito = 8
            },
        ];

        [HttpGet("GetArticulos")]
        public IEnumerable<Articulo> Get()
        {
            return Articulos;
        }
    }
}