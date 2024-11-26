using Microsoft.AspNetCore.Mvc;
using SurisCodeChallengeBack.Models;
using System;

namespace SurisCodeChallengeBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController() : ControllerBase
    {
        [HttpPost("GenerateOrder")]
        public IActionResult GenerateOrder([FromBody] Pedido pedido)
        {
            if(SellersController.Vendedores.Any(vendedor => vendedor.Descripcion == pedido.seller))
            {
                if(pedido.selectedItems != null)
                {
                    for (int x = 0; x < pedido.selectedItems.Length; x++)
                    {
                        if (pedido.selectedItems[x] == true)
                        {
                            if (ArticlesController.Articulos[x].Deposito > 0)
                            {
                                ArticlesController.Articulos[x].Deposito = ArticlesController.Articulos[x].Deposito - 1;
                            }
                            else
                            {
                                return BadRequest("No quedan articulos suficientes en el deposito.");
                            }
                        }
                    }
                }
                else
                {
                    return BadRequest("No existen items a seleccionar.");
                }
            }
            else
            {
                return BadRequest("El vendedor seleccionado no existe.");
            }

            return Ok();
        }
    }
}