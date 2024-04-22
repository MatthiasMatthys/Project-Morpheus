using System; 

namespace FirstPuzzle 
{ 
    class Program 
    { 
        static void Main(string[] args) 
        { 
            char[][] array = { 
                new char[] { 'L', 'I', 'W', 'P' },
                new char[] { 'V', 'X', 'D', 'T' },
                new char[] { 'B', 'O', 'Y', 'A' },
                new char[] { 'M', 'J', 'S', 'R' },
                new char[] { 'Q', 'Z', ' ', 'C' },
                new char[] { 'K', 'N', 'E', '.' },
                new char[] { 'H', 'U', 'G', 'F' } 
            }; 

            Console.Write(array[5][2]); 
            Console.Write(array[5][1]); 
            Console.Write(array[1][2]); 
            Console.Write(array[4][2]); 
            Console.Write(array[6][2]); 
            Console.Write(array[2][3]); 
            Console.Write(array[3][0]); 
            Console.Write(array[5][2]); 
            Console.Write(array[5][3]); 
        }
    }
}
