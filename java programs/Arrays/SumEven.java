public class SumEven {
    public static void main(String[] args) {
        int[] arr = {5, 8, 2, 11, 4};
        int sum = 0;

        for (int n : arr) {
            if (n % 2 == 0)
                sum += n;
        }

        System.out.println("Sum of even numbers: " + sum);
    }
}
