import java.util.Scanner;
class Matches {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Mail id:");
        String email = sc.next();
        if (email.matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")) {
            System.out.println("Valid email address.");
        } else {
            System.out.println("Invalid email address.");
        }
    }
}
