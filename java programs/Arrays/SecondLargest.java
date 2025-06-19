public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {3, 5, 2, 9, 7};
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for(int i : arr) {
            if(i > first) {
                second = first;
                first = i;
            } else if(i > second && i != first) {
                second = i;
            }
        }
        System.out.println("Second largest number is: " + second);
    }
}
