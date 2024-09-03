using System.ComponentModel.DataAnnotations; //Proporciona clases de atributos que se usan para definir los metadatos para ASP.NET MVC y los controles de ASP.NET.
using System.ComponentModel.DataAnnotations.Schema;



namespace RazorPagesMovie.Models;

public class Movie
{
    public int Id { get; set; }
    public string? Title { get; set; }

    // El atributo [Display] especifica el nombre para mostrar de un campo. En el código anterior, Release Date en lugar de ReleaseDate
    [Display(Name = "Release Date")]
    //El atributo [DataType] especifica el tipo de datos (Date). No se muestra la información de hora almacenada en el campo.
    [DataType(DataType.Date)]


    public DateTime ReleaseDate { get; set; }
    public string? Genre { get; set; }
// La anotación de datos [Column(TypeName = "decimal(18, 2)")] permite que Entity Framework Core asigne correctamente Price a la moneda en la base de datos. 
    [Column(TypeName = "decimal(18, 2)")]
    public decimal Price { get; set; }
    public string Rating { get; set; } = string.Empty;

}