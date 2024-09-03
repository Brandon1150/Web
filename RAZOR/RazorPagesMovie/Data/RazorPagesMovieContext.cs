using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Data
{
    public class RazorPagesMovieContext : DbContext
    {
        public RazorPagesMovieContext (DbContextOptions<RazorPagesMovieContext> options)
            : base(options)
        {
        }

//  En el código anterior se crea una propiedad DbSet<Movie> para el conjunto de entidades.
//  En la terminología de Entity Framework, un conjunto de entidades suele corresponder a una tabla de base de datos. 
//  Una entidad se corresponde con una fila de la tabla.
        public DbSet<RazorPagesMovie.Models.Movie> Movie { get; set; } = default!;
    }
    
}
