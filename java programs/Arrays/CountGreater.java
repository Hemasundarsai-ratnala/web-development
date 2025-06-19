public class CountGreater {
    public static void main(String[] args) {
        int[] arr = {1, 6, 9, 2, 10};
        int val = 5;
        int count = 0;

        for (int n : arr) {
            if (n > val) count++;
        }

        System.out.println("Count of elements > " + val + ": " + count);
    }
}
