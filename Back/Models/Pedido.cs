using Microsoft.AspNetCore.Mvc;

namespace SurisCodeChallengeBack.Models
{
    public class Pedido
    {
        public bool[]? selectedItems { get; set; } 
        public string? seller { get; set; }
    }
}