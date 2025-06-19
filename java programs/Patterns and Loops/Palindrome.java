import java.util.Scanner;
class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a value: ");
        int a = sc.nextInt();
        int temp = a;
        int x = (int) Math.floor(Math.log10(a) + 1);
        int rem, res = 0;

        while (temp > 0) {
            rem = temp % 10;
            res =(res*10)+rem;
            temp /= 10;
        }
		if(a==res){
			System.out.println(a+" is a Palindrome number");
		}
		else{
			System.out.println(a+" is not a Palindrome number");
		}
	}
}