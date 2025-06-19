public class DiffLargestSmallest {
    public static void main(String[] args) {
        int[] arr = {10, 20, 3, 40, 5};
        int max = arr[0], min = arr[0];

        for(int i : arr) {
            if(i > max) max = i;
            if(i < min) min = i;
        }

        System.out.println("Difference = " + (max - min));
    }
}
