public class FindDuplicates {
    public static void main(String[] args) {
        int[] arr = {2, 4, 6, 4, 2, 7};
        System.out.println("Duplicate elements are:");
        for(int i = 0; i < arr.length; i++) {
            for(int j = i + 1; j < arr.length; j++) {
                if(arr[i] == arr[j]) {
                    System.out.println(arr[i]);
                    break;
                }
            }
        }
    }
}
