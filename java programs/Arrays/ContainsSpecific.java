public class ContainsSpecific {
    public static void main(String[] args) {
        int[] arr = {11, 12, 20, 23};
        boolean found12 = false, found23 = false;

        for(int i : arr) {
            if(i == 12) found12 = true;
            if(i == 23) found23 = true;
        }

        if(found12 && found23)
            System.out.println("Array contains both 12 and 23");
        else
            System.out.println("Array does not contain both 12 and 23");
    }
}
