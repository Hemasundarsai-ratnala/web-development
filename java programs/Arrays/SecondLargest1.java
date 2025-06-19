public class SecondLargest1 {
    public static void main(String[] args) {
        int[] arr = {5, 20, 12, 7, 25};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        System.out.println("Second largest: " + second);
    }
}
