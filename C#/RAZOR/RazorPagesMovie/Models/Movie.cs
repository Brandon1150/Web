using System.ComponentModel.DataAnnotations; //Proporciona clases de atributos que se usan para definir los metadatos para ASP.NET MVC y los controles de ASP.NET.



namespace RazorPagesMovie.Models;

public class Movie
{
    public int Id { get; set; }
    public string? Title { get; set; }
    [DataType(DataType.Date)]
    public DateTime ReleaseDate { get; set; }
    public string? Genre { get; set; }
    public decimal Price { get; set; }
}