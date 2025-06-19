public class DeleteElement {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int del = 30;

        System.out.println("Array after deletion:");
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != del) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}
