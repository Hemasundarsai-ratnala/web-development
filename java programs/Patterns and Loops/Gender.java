import java.util.Scanner;

class Gender {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a gender (M/F): ");
        char a = sc.next().charAt(0);  

        switch(a) {
            case 'M': 
            case 'm':
                System.out.println("Male");
                break;
            case 'F':
            case 'f':
                System.out.println("Female");
                break;
            default:
                System.out.println("Invalid input");
        }

    }
}
