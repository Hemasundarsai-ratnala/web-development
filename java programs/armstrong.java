import java.util.Scanner;

class armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a value: ");
        int a = sc.nextInt();
        int temp = a;
        int x = (int) Math.floor(Math.log10(a) + 1);
        int rem, res = 0;

        while (temp > 0) {
            rem = temp % 10;
            res += (int)Math.pow(rem, x);
            temp /= 10;
        }

        if (res == a) {
            System.out.println(a + " is an Armstrong Number");
        } else {
            System.out.println(a + " is Not an Armstrong Number");
        }
    }
}
