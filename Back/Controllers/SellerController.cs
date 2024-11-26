using Microsoft.AspNetCore.Mvc;
using SurisCodeChallengeBack.Models;

namespace SurisCodeChallengeBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SellersController() : ControllerBase
    {
        public static readonly Vendedor[] Vendedores =
        [
            new Vendedor
            {
                Id = 1,
                Descripcion = "Hernan Garna",
            },
            new Vendedor
            {
                Id = 2,
                Descripcion = "Lucas Lauriente",
            },
            new Vendedor
            {
                Id = 3,
                Descripcion = "Martin Gomez",
            },
            new Vendedor
            {
                Id = 4,
                Descripcion = "Alan Tellerio",
            },
            new Vendedor
            {
                Id = 5,
                Descripcion = "Gonzalo Hernandez",
            },
            new Vendedor
            {
                Id = 6,
                Descripcion = "Ezequiel Martinez",
            },
        ];

        [HttpGet("GetVendedores")]
        public IEnumerable<Vendedor> Get()
        {
            return Vendedores;
        }
    }
}