using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace pruebaConsola
{
    class Program
    {
        static void Main(string[] args)
        {
            //Se generan objetos para controlar y parametrizar los datos a solicitar
            dto.DatosControl ObjControl = new dto.DatosControl();
            dto.DatosCirculo ObjCirculo = new dto.DatosCirculo();
            dto.DatosRectangulo ObjRectangulo = new dto.DatosRectangulo();

            ObjControl.RepetirConsola = true;           

            while (ObjControl.RepetirConsola)
            {
                ObjControl.RepetirConsolaError = true;
                //Se crea mensaje de bienvenida al usuario
                Console.WriteLine("Bienvenido a la prueba tecnica de C#.");
                Console.WriteLine("1 = Circulo.");
                Console.WriteLine("2 = Rectángulo.");
                Console.WriteLine("Por favor seleccione la figura de la cual desea calcular el area, siendo 1 el circulo y 2 el rectangulo.");

                while (ObjControl.RepetirConsolaError)
                {
                    //Se controla dato ingresado por el usuario
                    try
                    {
                        ObjControl.Figura = Convert.ToInt32(Console.ReadLine());
                        switch (ObjControl.Figura)
                        {
                            case 1:
                                Console.WriteLine("Haz seleccionado el circulo, por favor ingresa el radio del circulo");
                                var rd = Console.ReadLine().Replace(".", ",");
                                ObjCirculo.Radio = decimal.Parse(rd);
                                var piIni = 3.1416;
                                var PiXRd = (decimal)piIni * ObjCirculo.Radio;
                                ObjCirculo.AreaCirculo = (decimal)Math.Pow((double)PiXRd, 2);
                                Console.WriteLine($"El area del circulo es: {ObjCirculo.AreaCirculo}");
                                Console.WriteLine($"----------------------------------------------------");
                                ObjControl.RepetirConsolaError = false;
                                ObjControl.RepetirConsola = true;
                                break;
                            case 2:
                                Console.WriteLine("Haz seleccionado el rectangulo, por favor ingresa la base del rectangulo");
                                var bs = Console.ReadLine().Replace(".", ",");
                                ObjRectangulo.Base = decimal.Parse(bs);

                                Console.WriteLine("Por favor ingresa la altura del rectangulo");
                                var at = Console.ReadLine().Replace(".", ",");
                                ObjRectangulo.Altura = decimal.Parse(at);

                                //Se realiza calculo del area del rectangulo
                                ObjRectangulo.AreaRectangulo = ObjRectangulo.Base * ObjRectangulo.Altura;
                                Console.WriteLine($"El area del recatngulo es: {ObjRectangulo.AreaRectangulo}");
                                Console.WriteLine($"----------------------------------------------------");
                                ObjControl.RepetirConsolaError = false;
                                ObjControl.RepetirConsola = true;
                                break;
                            default:
                                Console.WriteLine($"Por favor ingrese 1 para circulo o 2 para rectangulo, dato recibido: {ObjControl.Figura}");
                                ObjControl.RepetirConsolaError = true;
                                break;
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("El dato ingresado no es valido, por favor ingrese 1 para circulo o 2 para rectangulo");
                        ObjControl.RepetirConsolaError = true;
                    }
                }
            }
        }
    }     
}
namespace pruebaConsola.dto
{
    public class DatosRectangulo
    {
        public decimal Base { get; set; }
        public decimal Altura { get; set; }
        public decimal AreaRectangulo { get; set; }
    }
    public class DatosCirculo
    {
        public decimal Radio { get; set; }
        public decimal AreaCirculo{ get; set; }
    }
    public class DatosControl
    {
        public int Figura { get; set; }
        public bool RepetirConsola{ get; set; }
        public bool RepetirConsolaError { get; set; }
    }
}
 