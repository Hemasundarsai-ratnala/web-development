public class InsertElement {
    public static void main(String[] args) {
        int[] arr = new int[6];
        int[] original = {10, 20, 30, 40, 50};
        int pos = 2; // index
        int val = 99;

        for (int i = 0; i < original.length; i++) {
            arr[i] = original[i];
        }

        for (int i = original.length; i > pos; i--) {
            arr[i] = arr[i - 1];
        }

        arr[pos] = val;

        System.out.println("New array:");
        for (int i = 0; i < original.length + 1; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
