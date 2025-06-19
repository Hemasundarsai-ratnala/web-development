public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = new int[99];
        int missing = 57; 

        int j = 0;
        for(int i = 1; i <= 100; i++) {
            if(i != missing) {
                arr[j++] = i;
            }
        }

        int sum = 0;
        for(int i : arr) {
            sum += i;
        }

        int expectedSum = 100 * 101 / 2;
        int missingNum = expectedSum - sum;

        System.out.println("Missing number is: " + missingNum);
    }
}
