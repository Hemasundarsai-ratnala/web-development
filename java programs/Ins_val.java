import java.util.Scanner;

class Ins_val {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of array: ");
        int n = sc.nextInt();
        int[] arr = new int[n + 1];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.print("Enter index to insert (0 to " + n + "): ");
        int insertIndex = sc.nextInt();

        if (insertIndex < 0 || insertIndex > n) {
            System.out.println("Invalid index!");
            return;
        }
        System.out.print("Enter value to insert: ");
        int value = sc.nextInt();

        for (int i = n; i > insertIndex; i--) {
            arr[i] = arr[i - 1];
        }
        arr[insertIndex] = value;
        n++; 

        System.out.println("Array after insertion:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
