public class RemoveAndReturnArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 5};
        int[] temp = new int[arr.length];
        int index = 0;

        for(int i = 0; i < arr.length; i++) {
            boolean duplicate = false;
            for(int j = 0; j < i; j++) {
                if(arr[i] == arr[j]) {
                    duplicate = true;
                    break;
                }
            }
            if(!duplicate) {
                temp[index++] = arr[i];
            }
        }

        System.out.print("New array without duplicates: ");
        for(int i = 0; i < index; i++) {
            System.out.print(temp[i] + " ");
        }
    }
}
