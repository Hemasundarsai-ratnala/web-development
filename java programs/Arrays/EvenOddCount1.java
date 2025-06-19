public class EvenOddCount1 {
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 7, 10};
        int even = 0, odd = 0;

        for (int n : arr) {
            if (n % 2 == 0) even++;
            else odd++;
        }
        System.out.println("Even: " + even + ", Odd: " + odd);
    }
}
