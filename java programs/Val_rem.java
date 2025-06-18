import java.util.Scanner;

class Val_rem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter No. of Array values:");
        int n = sc.nextInt();
        int a[] = new int[n];
        System.out.println("Enter Array values:");
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        System.out.println("Enter value to be removed: ");
        int b = sc.nextInt();
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (a[i] == b) {               
                for (int j = i; j < n - 1; j++) {
                    a[j] = a[j + 1];
                }
                found = true;
                n--; 
                break; 
            }
        }

        if (!found) {
            System.out.println("Value not found in array.");
        }
        System.out.println("Updated Array values:");
        for (int i = 0; i < n; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
